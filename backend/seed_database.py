"""
Script para popular o banco de dados MySQL com dados de exemplo
Útil para demonstração e testes do TCC
"""

import pymysql
import json
from datetime import datetime, timedelta
import random
from database import get_connection, init_db

def seed_quiz_results():
    """Popula tabela quiz_results com dados de exemplo"""
    
    conn = get_connection()
    cursor = conn.cursor()
    
    # Dados de exemplo
    nomes = [
        "Maria Silva", "João Santos", "Ana Costa", "Pedro Oliveira",
        "Rosa Lima", "José Ferreira", "Helena Rodrigues", "Antonio Souza",
        "Carmen Alves", "Francisco Pereira"
    ]
    
    faixas_etarias = ["60-65 anos", "66-70 anos", "71-75 anos", "76-80 anos", "80+ anos"]
    
    # Questões do quiz (14 questões)
    total_questions = 14
    
    # Gerar resultados de pré-teste (notas mais baixas)
    print("📝 Inserindo resultados de PRÉ-TESTE...")
    for i, nome in enumerate(nomes):
        score_pre = random.randint(4, 9)  # Entre 4-9 acertos
        faixa = random.choice(faixas_etarias)
        
        # Gerar respostas
        answers = []
        for q_id in range(1, total_questions + 1):
            is_correct = random.random() < (score_pre / total_questions)
            answers.append({
                "questionId": q_id,
                "selectedOption": chr(65 + random.randint(0, 3)),  # A, B, C ou D
                "isCorrect": is_correct
            })
        
        timestamp = datetime.now() - timedelta(days=random.randint(15, 30))
        
        cursor.execute('''
            INSERT INTO quiz_results (user_name, user_age_range, score, total_questions, test_type, answers, timestamp)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        ''', (nome, faixa, score_pre, total_questions, 'pre-teste', json.dumps(answers), timestamp))
        
        print(f"  ✅ {nome} - {score_pre}/{total_questions} acertos")
    
    # Gerar resultados de pós-teste (notas mais altas)
    print("\n📝 Inserindo resultados de PÓS-TESTE...")
    for i, nome in enumerate(nomes):
        score_pos = random.randint(10, 14)  # Entre 10-14 acertos
        faixa = random.choice(faixas_etarias)
        
        # Gerar respostas
        answers = []
        for q_id in range(1, total_questions + 1):
            is_correct = random.random() < (score_pos / total_questions)
            answers.append({
                "questionId": q_id,
                "selectedOption": chr(65 + random.randint(0, 3)),
                "isCorrect": is_correct
            })
        
        timestamp = datetime.now() - timedelta(days=random.randint(1, 7))
        
        cursor.execute('''
            INSERT INTO quiz_results (user_name, user_age_range, score, total_questions, test_type, answers, timestamp)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        ''', (nome, faixa, score_pos, total_questions, 'pos-teste', json.dumps(answers), timestamp))
        
        print(f"  ✅ {nome} - {score_pos}/{total_questions} acertos")
    
    conn.commit()
    cursor.close()
    conn.close()
    
    print(f"\n✅ {len(nomes) * 2} resultados de quiz inseridos!")

def seed_survey_responses():
    """Popula tabela survey_responses com dados de exemplo"""
    
    conn = get_connection()
    cursor = conn.cursor()
    
    nomes = [
        "Maria Silva", "João Santos", "Ana Costa", "Pedro Oliveira", "Rosa Lima",
        "José Ferreira", "Helena Rodrigues", "Antonio Souza", "Carmen Alves", "Francisco Pereira",
        "Luiza Martins", "Carlos Rocha", "Beatriz Gomes", "Manuel Dias", "Teresa Moreira"
    ]
    
    opcoes = {
        'faixa_etaria': ["60-65 anos", "66-70 anos", "71-75 anos", "76-80 anos", "80+ anos"],
        'frequencia_internet': ["Todos os dias", "Várias vezes por semana", "Uma vez por semana", "Raramente", "Nunca"],
        'seguranca_navegacao': ["Muito seguro", "Seguro", "Neutro", "Inseguro", "Muito inseguro"],
        'vitima_golpe_virtual': ["Sim", "Não", "Prefiro não responder"],
        'ligacao_golpe': ["Sim, frequentemente", "Sim, algumas vezes", "Raramente", "Nunca"],
        'conhece_vitima': ["Sim", "Não"],
        'mensagem_suspeita': ["Sempre clico", "Às vezes clico", "Raramente clico", "Nunca clico"],
        'seguranca_banco': ["Muito confiante", "Confiante", "Neutro", "Pouco confiante", "Nada confiante"],
        'compartilha_senhas': ["Sim, com familiares", "Sim, com amigos", "Raramente", "Nunca"],
        'criacao_senhas': ["Uso datas de nascimento", "Uso nomes de familiares", "Uso senhas fortes", "Uso a mesma senha", "Anoto em papel"],
        'atualiza_apps': ["Sempre", "Frequentemente", "Raramente", "Nunca"],
        'conhece_phishing': ["Sim, muito bem", "Sim, um pouco", "Já ouvi falar", "Não"],
        'importancia_site': ["Muito importante", "Importante", "Neutro", "Pouco importante", "Nada importante"]
    }
    
    print("\n📋 Inserindo respostas de PESQUISA...")
    for nome in nomes:
        resposta = {
            'nome_completo': nome,
            'faixa_etaria': random.choice(opcoes['faixa_etaria']),
            'frequencia_internet': random.choice(opcoes['frequencia_internet']),
            'seguranca_navegacao': random.choice(opcoes['seguranca_navegacao']),
            'vitima_golpe_virtual': random.choice(opcoes['vitima_golpe_virtual']),
            'ligacao_golpe': random.choice(opcoes['ligacao_golpe']),
            'conhece_vitima': random.choice(opcoes['conhece_vitima']),
            'mensagem_suspeita': random.choice(opcoes['mensagem_suspeita']),
            'seguranca_banco': random.choice(opcoes['seguranca_banco']),
            'compartilha_senhas': random.choice(opcoes['compartilha_senhas']),
            'criacao_senhas': random.choice(opcoes['criacao_senhas']),
            'atualiza_apps': random.choice(opcoes['atualiza_apps']),
            'conhece_phishing': random.choice(opcoes['conhece_phishing']),
            'importancia_site': random.choice(opcoes['importancia_site']),
            'timestamp': datetime.now() - timedelta(days=random.randint(1, 30))
        }
        
        cursor.execute('''
            INSERT INTO survey_responses (
                nome_completo, faixa_etaria, frequencia_internet, seguranca_navegacao,
                vitima_golpe_virtual, ligacao_golpe, conhece_vitima, mensagem_suspeita,
                seguranca_banco, compartilha_senhas, criacao_senhas, atualiza_apps,
                conhece_phishing, importancia_site, timestamp
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', tuple(resposta.values()))
        
        print(f"  ✅ {nome} - Faixa: {resposta['faixa_etaria']}")
    
    conn.commit()
    cursor.close()
    conn.close()
    
    print(f"\n✅ {len(nomes)} respostas de pesquisa inseridas!")

def main():
    print("="*70)
    print("🌱 SEED DATABASE - Populando Banco de Dados MySQL")
    print("="*70)
    print()
    
    # Inicializar banco de dados (criar tabelas se não existirem)
    print("🔧 Inicializando banco de dados...")
    init_db()
    print()
    
    # Popular tabelas
    try:
        seed_quiz_results()
        seed_survey_responses()
        
        print("\n" + "="*70)
        print("✅ SEED CONCLUÍDO COM SUCESSO!")
        print("="*70)
        print()
        print("📊 Dados inseridos:")
        print("   • 20 resultados de quiz (10 pré-teste + 10 pós-teste)")
        print("   • 15 respostas de pesquisa")
        print()
        print("🔗 Acesse o dashboard em: http://localhost:3000/dashboard")
        print("   Usuário: admin")
        print("   Senha: pauloph10")
        print()
        
    except Exception as e:
        print(f"\n❌ ERRO ao popular banco: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
