from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Dict, Any
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'seguranca_digital')
client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

app = FastAPI(title="Segurança Digital API", version="1.3.0")
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

@api_router.post("/quiz-results", status_code=201)
async def save_quiz_result(result: QuizResultCreate):
    result_dict = result.dict()
    await db.quiz_results.insert_one(result_dict)
    return {"message": "Resultado do quiz guardado com sucesso!"}

@api_router.get("/quiz-results/{user_id}", response_model=List[Dict[str, Any]])
async def get_user_quiz_results(user_id: str):
    results = await db.quiz_results.find({"user_name": user_id}).to_list(100) # Alterado para procurar por nome
    for result in results:
        result["_id"] = str(result["_id"])
    return results

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)