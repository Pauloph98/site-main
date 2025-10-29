from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Dict, Any
import uuid
from datetime import datetime
import sqlite3
import json

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configuração do SQLite
DB_PATH = ROOT_DIR / 'quiz_results.db'

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS quiz_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_name TEXT NOT NULL,
            user_age_range TEXT NOT NULL,
            score INTEGER NOT NULL,
            total_questions INTEGER NOT NULL,
            test_type TEXT NOT NULL,
            answers TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS survey_responses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome_completo TEXT NOT NULL,
            faixa_etaria TEXT NOT NULL,
            frequencia_internet TEXT NOT NULL,
            seguranca_navegacao TEXT NOT NULL,
            vitima_golpe_virtual TEXT NOT NULL,
            ligacao_golpe TEXT NOT NULL,
            conhece_vitima TEXT NOT NULL,
            mensagem_suspeita TEXT NOT NULL,
            seguranca_banco TEXT NOT NULL,
            compartilha_senhas TEXT NOT NULL,
            criacao_senhas TEXT NOT NULL,
            atualiza_apps TEXT NOT NULL,
            conhece_phishing TEXT NOT NULL,
            importancia_site TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

app = FastAPI(title="Segurança Digital API", version="2.0.0")
api_router = APIRouter(prefix="/api")

class QuizResultAnswer(BaseModel):
    questionId: int
    selectedOption: str
    isCorrect: bool

class QuizResultCreate(BaseModel):
    user_name: str
    user_age_range: str
    score: int
    total_questions: int
    answers: List[QuizResultAnswer]
    test_type: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class SurveyResponse(BaseModel):
    nome_completo: str
    faixa_etaria: str
    frequencia_internet: str
    seguranca_navegacao: str
    vitima_golpe_virtual: str
    ligacao_golpe: str
    conhece_vitima: str
    mensagem_suspeita: str
    seguranca_banco: str
    compartilha_senhas: str
    criacao_senhas: str
    atualiza_apps: str
    conhece_phishing: str
    importancia_site: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

@api_router.post("/quiz-results", status_code=201)
async def save_quiz_result(result: QuizResultCreate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO quiz_results (user_name, user_age_range, score, total_questions, test_type, answers, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (
        result.user_name,
        result.user_age_range,
        result.score,
        result.total_questions,
        result.test_type,
        json.dumps([a.dict() for a in result.answers]),
        result.timestamp.isoformat()
    ))
    
    conn.commit()
    conn.close()
    
    return {"message": "Resultado do quiz guardado com sucesso!"}

@api_router.get("/quiz-results/stats")
async def get_quiz_stats():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Estatísticas do pré-teste
    cursor.execute('''
        SELECT 
            COUNT(*) as total_users,
            AVG(score) as avg_score,
            AVG(CAST(score AS FLOAT) / total_questions * 100) as avg_percentage
        FROM quiz_results 
        WHERE test_type = 'pre-teste'
    ''')
    pre_test_stats = cursor.fetchone()
    
    # Estatísticas do pós-teste
    cursor.execute('''
        SELECT 
            COUNT(*) as total_users,
            AVG(score) as avg_score,
            AVG(CAST(score AS FLOAT) / total_questions * 100) as avg_percentage
        FROM quiz_results 
        WHERE test_type = 'pos-teste'
    ''')
    post_test_stats = cursor.fetchone()
    
    # Estatísticas por faixa etária
    cursor.execute('''
        SELECT 
            user_age_range,
            test_type,
            COUNT(*) as count,
            AVG(CAST(score AS FLOAT) / total_questions * 100) as avg_percentage
        FROM quiz_results
        GROUP BY user_age_range, test_type
        ORDER BY user_age_range, test_type
    ''')
    age_range_stats = cursor.fetchall()
    
    # Desempenho por questão
    cursor.execute('SELECT answers, test_type FROM quiz_results')
    all_answers = cursor.fetchall()
    
    question_stats = {}
    for answers_json, test_type in all_answers:
        answers = json.loads(answers_json)
        for answer in answers:
            q_id = answer['questionId']
            if q_id not in question_stats:
                question_stats[q_id] = {
                    'pre-teste': {'total': 0, 'correct': 0},
                    'pos-teste': {'total': 0, 'correct': 0}
                }
            question_stats[q_id][test_type]['total'] += 1
            if answer['isCorrect']:
                question_stats[q_id][test_type]['correct'] += 1
    
    conn.close()
    
    return {
        "pre_test": {
            "total_users": pre_test_stats[0] or 0,
            "avg_score": round(pre_test_stats[1] or 0, 2),
            "avg_percentage": round(pre_test_stats[2] or 0, 2)
        },
        "post_test": {
            "total_users": post_test_stats[0] or 0,
            "avg_score": round(post_test_stats[1] or 0, 2),
            "avg_percentage": round(post_test_stats[2] or 0, 2)
        },
        "age_range_stats": [
            {
                "age_range": row[0],
                "test_type": row[1],
                "count": row[2],
                "avg_percentage": round(row[3], 2)
            }
            for row in age_range_stats
        ],
        "question_stats": {
            str(q_id): {
                'pre_test_percentage': round(
                    (stats['pre-teste']['correct'] / stats['pre-teste']['total'] * 100) 
                    if stats['pre-teste']['total'] > 0 else 0, 2
                ),
                'post_test_percentage': round(
                    (stats['pos-teste']['correct'] / stats['pos-teste']['total'] * 100) 
                    if stats['pos-teste']['total'] > 0 else 0, 2
                )
            }
            for q_id, stats in question_stats.items()
        }
    }

@api_router.post("/survey-responses", status_code=201)
async def save_survey_response(response: SurveyResponse):
    try:
        print(f"Recebendo resposta da pesquisa: {response.dict()}")
        
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO survey_responses (
                nome_completo, faixa_etaria, frequencia_internet, seguranca_navegacao,
                vitima_golpe_virtual, ligacao_golpe, conhece_vitima, mensagem_suspeita,
                seguranca_banco, compartilha_senhas, criacao_senhas, atualiza_apps,
                conhece_phishing, importancia_site, timestamp
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            response.nome_completo,
            response.faixa_etaria,
            response.frequencia_internet,
            response.seguranca_navegacao,
            response.vitima_golpe_virtual,
            response.ligacao_golpe,
            response.conhece_vitima,
            response.mensagem_suspeita,
            response.seguranca_banco,
            response.compartilha_senhas,
            response.criacao_senhas,
            response.atualiza_apps,
            response.conhece_phishing,
            response.importancia_site,
            response.timestamp.isoformat()
        ))
        
        conn.commit()
        conn.close()
        
        print("Pesquisa salva com sucesso!")
        return {"message": "Pesquisa salva com sucesso!"}
    except Exception as e:
        print(f"Erro ao salvar pesquisa: {str(e)}")
        import traceback
        traceback.print_exc()
        raise

@api_router.get("/survey-responses/stats")
async def get_survey_stats():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Total de respostas
    cursor.execute('SELECT COUNT(*) FROM survey_responses')
    total_responses = cursor.fetchone()[0]
    
    # Função auxiliar para contar respostas
    def count_responses(field):
        cursor.execute(f'SELECT {field}, COUNT(*) as count FROM survey_responses GROUP BY {field}')
        return [{"label": row[0], "count": row[1]} for row in cursor.fetchall()]
    
    stats = {
        "total_responses": total_responses,
        "faixa_etaria": count_responses("faixa_etaria"),
        "frequencia_internet": count_responses("frequencia_internet"),
        "seguranca_navegacao": count_responses("seguranca_navegacao"),
        "vitima_golpe_virtual": count_responses("vitima_golpe_virtual"),
        "ligacao_golpe": count_responses("ligacao_golpe"),
        "conhece_vitima": count_responses("conhece_vitima"),
        "mensagem_suspeita": count_responses("mensagem_suspeita"),
        "seguranca_banco": count_responses("seguranca_banco"),
        "compartilha_senhas": count_responses("compartilha_senhas"),
        "criacao_senhas": count_responses("criacao_senhas"),
        "atualiza_apps": count_responses("atualiza_apps"),
        "conhece_phishing": count_responses("conhece_phishing"),
        "importancia_site": count_responses("importancia_site")
    }
    
    conn.close()
    return stats

app.include_router(api_router)

# Configuração de CORS para desenvolvimento e produção
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS", 
    "http://localhost:3000,http://127.0.0.1:3000"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)