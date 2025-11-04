-- ============================================================================
-- SEED DATABASE - Segurança Digital para Idosos
-- TCC UNIALFA 2025 - Paulo Henrique Pereira Silva Barros
-- ============================================================================
-- Este arquivo contém dados REAIS exportados do banco de dados em produção
-- Gerado automaticamente em: 2025-11-04 14:18:36
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

-- ============================================================================
-- DADOS: quiz_results (2 registros)
-- ============================================================================

INSERT INTO quiz_results (user_name, user_age_range, score, total_questions, test_type, answers, timestamp) VALUES
('PAULO HENRIQUE PEREIRA SILVA BARROS', '-50', 6, 20, 'pre-teste', '[{"isCorrect": false, "questionId": 1, "selectedOption": "a"}, {"isCorrect": false, "questionId": 2, "selectedOption": "b"}, {"isCorrect": false, "questionId": 3, "selectedOption": "a"}, {"isCorrect": true, "questionId": 4, "selectedOption": "c"}, {"isCorrect": true, "questionId": 5, "selectedOption": "b"}, {"isCorrect": false, "questionId": 6, "selectedOption": "a"}, {"isCorrect": true, "questionId": 7, "selectedOption": "b"}, {"isCorrect": true, "questionId": 8, "selectedOption": "b"}, {"isCorrect": true, "questionId": 9, "selectedOption": "b"}, {"isCorrect": false, "questionId": 10, "selectedOption": "a"}, {"isCorrect": false, "questionId": 11, "selectedOption": "a"}, {"isCorrect": false, "questionId": 12, "selectedOption": "a"}, {"isCorrect": false, "questionId": 13, "selectedOption": "a"}, {"isCorrect": false, "questionId": 14, "selectedOption": "a"}, {"isCorrect": false, "questionId": 15, "selectedOption": "a"}, {"isCorrect": true, "questionId": 16, "selectedOption": "a"}, {"isCorrect": false, "questionId": 17, "selectedOption": "a"}, {"isCorrect": false, "questionId": 18, "selectedOption": "a"}, {"isCorrect": false, "questionId": 19, "selectedOption": "a"}, {"isCorrect": false, "questionId": 20, "selectedOption": "a"}]', '2025-10-29 23:59:08'),
('PAULO HENRIQUE PEREIRA SILVA BARROS', '-50', 20, 20, 'pos-teste', '[{"isCorrect": true, "questionId": 1, "selectedOption": "b"}, {"isCorrect": true, "questionId": 2, "selectedOption": "a"}, {"isCorrect": true, "questionId": 3, "selectedOption": "b"}, {"isCorrect": true, "questionId": 4, "selectedOption": "c"}, {"isCorrect": true, "questionId": 5, "selectedOption": "b"}, {"isCorrect": true, "questionId": 6, "selectedOption": "b"}, {"isCorrect": true, "questionId": 7, "selectedOption": "b"}, {"isCorrect": true, "questionId": 8, "selectedOption": "b"}, {"isCorrect": true, "questionId": 9, "selectedOption": "b"}, {"isCorrect": true, "questionId": 10, "selectedOption": "b"}, {"isCorrect": true, "questionId": 11, "selectedOption": "b"}, {"isCorrect": true, "questionId": 12, "selectedOption": "b"}, {"isCorrect": true, "questionId": 13, "selectedOption": "b"}, {"isCorrect": true, "questionId": 14, "selectedOption": "b"}, {"isCorrect": true, "questionId": 15, "selectedOption": "c"}, {"isCorrect": true, "questionId": 16, "selectedOption": "a"}, {"isCorrect": true, "questionId": 17, "selectedOption": "b"}, {"isCorrect": true, "questionId": 18, "selectedOption": "b"}, {"isCorrect": true, "questionId": 19, "selectedOption": "b"}, {"isCorrect": true, "questionId": 20, "selectedOption": "c"}]', '2025-10-30 00:03:26');

-- ============================================================================
-- DADOS: survey_responses (1 registros)
-- ============================================================================

INSERT INTO survey_responses (nome_completo, faixa_etaria, frequencia_internet, seguranca_navegacao, vitima_golpe_virtual, ligacao_golpe, conhece_vitima, mensagem_suspeita, seguranca_banco, compartilha_senhas, criacao_senhas, atualiza_apps, conhece_phishing, importancia_site, timestamp) VALUES
('Paulo Henrique Pereira Silva Barros', 'Menos de 50 anos', 'Todos os dias', 'Sim', 'Não', 'Sim', 'Sim', 'Sim', 'Sim', 'Às vezes', 'Senha com letras, números e símbolos diferentes', 'Sempre', 'Sim, sei identificar', 'Importante, pode ajudar muitas pessoas.', '2025-10-29 23:38:46');

-- ============================================================================
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
