import pymysql
import os
from dotenv import load_dotenv

load_dotenv()

# Configuração do MySQL
DB_CONFIG = {
    'host': os.getenv('DB_HOST', 'localhost'),
    'user': os.getenv('DB_USER', 'root'),
    'password': os.getenv('DB_PASSWORD', ''),
    'database': os.getenv('DB_NAME', 'seguranca_digital'),
    'port': int(os.getenv('DB_PORT', 3306)),
    'charset': 'utf8mb4',
    'cursorclass': pymysql.cursors.DictCursor
}

def get_connection():
    """Cria e retorna uma conexão com o MySQL"""
    return pymysql.connect(**DB_CONFIG)

def init_db():
    """Inicializa o banco de dados criando as tabelas necessárias"""
    conn = get_connection()
    cursor = conn.cursor()
    
    # Tabela de resultados do quiz
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS quiz_results (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_name VARCHAR(255) NOT NULL,
            user_age_range VARCHAR(50) NOT NULL,
            score INT NOT NULL,
            total_questions INT NOT NULL,
            test_type VARCHAR(50) NOT NULL,
            answers JSON NOT NULL,
            timestamp DATETIME NOT NULL,
            INDEX idx_test_type (test_type),
            INDEX idx_timestamp (timestamp)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ''')
    
    # Tabela de respostas da pesquisa
    cursor.execute('''
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
    ''')
    
    conn.commit()
    cursor.close()
    conn.close()
    print("✅ Banco de dados MySQL inicializado com sucesso!")
