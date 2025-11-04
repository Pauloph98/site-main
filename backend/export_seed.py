"""
Script para exportar dados do banco MySQL e gerar seed.sql
Extrai dados reais das tabelas quiz_results e survey_responses
"""

import pymysql
import os
import json
from datetime import datetime
from dotenv import load_dotenv

# Carrega variáveis de ambiente
load_dotenv()

def get_db_connection():
    """Cria conexão com o banco de dados MySQL"""
    return pymysql.connect(
        host=os.getenv('DB_HOST'),
        port=int(os.getenv('DB_PORT', 3306)),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD'),
        database=os.getenv('DB_NAME'),
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def escape_string(value):
    """Escapa strings para SQL"""
    if value is None:
        return 'NULL'
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, datetime):
        return f"'{value.strftime('%Y-%m-%d %H:%M:%S')}'"
    # Escapa aspas simples
    value = str(value).replace("'", "''")
    return f"'{value}'"

def export_quiz_results(cursor):
    """Exporta dados da tabela quiz_results"""
    print("📊 Exportando quiz_results...")
    
    cursor.execute("SELECT * FROM quiz_results ORDER BY timestamp")
    results = cursor.fetchall()
    
    if not results:
        print("   ⚠️  Nenhum registro encontrado em quiz_results")
        return []
    
    print(f"   ✅ {len(results)} registros encontrados")
    
    inserts = []
    for row in results:
        values = [
            escape_string(row['user_name']),
            escape_string(row['user_age_range']),
            escape_string(row['score']),
            escape_string(row['total_questions']),
            escape_string(row['test_type']),
            escape_string(row['answers']),
            escape_string(row['timestamp'])
        ]
        
        insert = f"({', '.join(values)})"
        inserts.append(insert)
    
    return inserts

def export_survey_responses(cursor):
    """Exporta dados da tabela survey_responses"""
    print("📋 Exportando survey_responses...")
    
    cursor.execute("SELECT * FROM survey_responses ORDER BY timestamp")
    results = cursor.fetchall()
    
    if not results:
        print("   ⚠️  Nenhum registro encontrado em survey_responses")
        return []
    
    print(f"   ✅ {len(results)} registros encontrados")
    
    inserts = []
    for row in results:
        values = [
            escape_string(row['nome_completo']),
            escape_string(row['faixa_etaria']),
            escape_string(row['frequencia_internet']),
            escape_string(row['seguranca_navegacao']),
            escape_string(row['vitima_golpe_virtual']),
            escape_string(row['ligacao_golpe']),
            escape_string(row['conhece_vitima']),
            escape_string(row['mensagem_suspeita']),
            escape_string(row['seguranca_banco']),
            escape_string(row['compartilha_senhas']),
            escape_string(row['criacao_senhas']),
            escape_string(row['atualiza_apps']),
            escape_string(row['conhece_phishing']),
            escape_string(row['importancia_site']),
            escape_string(row['timestamp'])
        ]
        
        insert = f"({', '.join(values)})"
        inserts.append(insert)
    
    return inserts

def generate_seed_sql():
    """Gera arquivo seed.sql com dados do banco"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        print("="*80)
        print("🔄 EXPORTANDO DADOS DO BANCO PARA seed.sql")
        print("="*80)
        print(f"\n📡 Conectado ao banco: {os.getenv('DB_NAME')}")
        print(f"   Host: {os.getenv('DB_HOST')}\n")
        
        # Exporta dados
        quiz_inserts = export_quiz_results(cursor)
        survey_inserts = export_survey_responses(cursor)
        
        cursor.close()
        conn.close()
        
        # Gera SQL
        print("\n📝 Gerando arquivo seed.sql...")
        
        sql_content = f"""-- ============================================================================
-- SEED DATABASE - Segurança Digital para Idosos
-- TCC UNIALFA 2025 - Paulo Henrique Pereira Silva Barros
-- ============================================================================
-- Este arquivo contém dados REAIS exportados do banco de dados em produção
-- Gerado automaticamente em: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
-- ============================================================================

-- Seleciona o banco de dados
USE paul1199_segurancadigital;

-- ============================================================================
-- TABELA: quiz_results
-- Armazena resultados de pré-testes e pós-testes
-- ============================================================================

CREATE TABLE IF NOT EXISTS quiz_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL COMMENT 'Nome do usuário que fez o teste',
    user_age_range VARCHAR(50) NOT NULL COMMENT 'Faixa etária do usuário',
    score INT NOT NULL COMMENT 'Pontuação obtida',
    total_questions INT NOT NULL COMMENT 'Total de questões do teste',
    test_type VARCHAR(50) NOT NULL COMMENT 'Tipo: pre-teste ou pos-teste',
    answers JSON NOT NULL COMMENT 'Respostas detalhadas em formato JSON',
    timestamp DATETIME NOT NULL COMMENT 'Data e hora do teste',
    INDEX idx_test_type (test_type),
    INDEX idx_timestamp (timestamp),
    INDEX idx_age_range (user_age_range)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Resultados de testes de conhecimento';

-- ============================================================================
-- TABELA: survey_responses
-- Armazena respostas da pesquisa de perfil demográfico
-- ============================================================================

CREATE TABLE IF NOT EXISTS survey_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    faixa_etaria VARCHAR(50) NOT NULL,
    frequencia_internet VARCHAR(100) NOT NULL,
    seguranca_navegacao VARCHAR(100) NOT NULL,
    vitima_golpe_virtual VARCHAR(50) NOT NULL,
    ligacao_golpe VARCHAR(50) NOT NULL,
    conhece_vitima VARCHAR(50) NOT NULL,
    mensagem_suspeita VARCHAR(100) NOT NULL,
    seguranca_banco VARCHAR(100) NOT NULL,
    compartilha_senhas VARCHAR(50) NOT NULL,
    criacao_senhas VARCHAR(100) NOT NULL,
    atualiza_apps VARCHAR(100) NOT NULL,
    conhece_phishing VARCHAR(50) NOT NULL,
    importancia_site VARCHAR(100) NOT NULL,
    timestamp DATETIME NOT NULL,
    INDEX idx_faixa_etaria (faixa_etaria),
    INDEX idx_timestamp (timestamp)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Respostas da pesquisa de perfil';

"""
        
        # Adiciona INSERTs de quiz_results
        if quiz_inserts:
            sql_content += f"""-- ============================================================================
-- DADOS: quiz_results ({len(quiz_inserts)} registros)
-- ============================================================================

INSERT INTO quiz_results (user_name, user_age_range, score, total_questions, test_type, answers, timestamp) VALUES
"""
            sql_content += ",\n".join(quiz_inserts) + ";\n\n"
        else:
            sql_content += "-- Nenhum dado em quiz_results\n\n"
        
        # Adiciona INSERTs de survey_responses
        if survey_inserts:
            sql_content += f"""-- ============================================================================
-- DADOS: survey_responses ({len(survey_inserts)} registros)
-- ============================================================================

INSERT INTO survey_responses (nome_completo, faixa_etaria, frequencia_internet, seguranca_navegacao, vitima_golpe_virtual, ligacao_golpe, conhece_vitima, mensagem_suspeita, seguranca_banco, compartilha_senhas, criacao_senhas, atualiza_apps, conhece_phishing, importancia_site, timestamp) VALUES
"""
            sql_content += ",\n".join(survey_inserts) + ";\n\n"
        else:
            sql_content += "-- Nenhum dado em survey_responses\n\n"
        
        # Adiciona queries de verificação
        sql_content += """-- ============================================================================
-- VERIFICAÇÃO DOS DADOS INSERIDOS
-- ============================================================================

-- Contar registros por tipo de teste
SELECT test_type, COUNT(*) as total, AVG(score) as media_pontuacao
FROM quiz_results
GROUP BY test_type;

-- Contar respostas de pesquisa por faixa etária
SELECT faixa_etaria, COUNT(*) as total
FROM survey_responses
GROUP BY faixa_etaria
ORDER BY faixa_etaria;

-- Estatísticas gerais
SELECT 
    (SELECT COUNT(*) FROM quiz_results) as total_quiz_results,
    (SELECT COUNT(*) FROM survey_responses) as total_survey_responses;

-- ============================================================================
-- FIM DO SCRIPT DE SEED
-- ============================================================================
-- Para executar este arquivo:
-- mysql -u paul1199_pauloph10 -p -h sh00046.hostgator.com.br paul1199_segurancadigital < seed.sql
-- ============================================================================
"""
        
        # Salva arquivo
        seed_path = os.path.join(os.path.dirname(__file__), '..', 'seed.sql')
        with open(seed_path, 'w', encoding='utf-8') as f:
            f.write(sql_content)
        
        print(f"   ✅ Arquivo salvo em: {seed_path}")
        
        # Estatísticas
        print("\n📊 Estatísticas:")
        print(f"   • quiz_results: {len(quiz_inserts)} registros")
        print(f"   • survey_responses: {len(survey_inserts)} registros")
        print(f"   • Total: {len(quiz_inserts) + len(survey_inserts)} registros")
        
        print("\n✅ Exportação concluída com sucesso!")
        print("\n💡 O arquivo seed.sql agora contém os dados REAIS do seu banco.")
        print("   Você pode usar este arquivo para:")
        print("   • Backup dos dados atuais")
        print("   • Restaurar dados em outro ambiente")
        print("   • Entregar para o TCC com dados reais")
        
        return True
        
    except Exception as e:
        print(f"\n❌ Erro ao exportar dados: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    generate_seed_sql()
