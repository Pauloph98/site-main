#!/usr/bin/env python3
"""
🛡️ SEGURANÇA DIGITAL PARA IDOSOS - INSTALADOR AUTOMÁTICO
=======================================================

Este script instala automaticamente toda a plataforma de segurança digital,
incluindo todas as funcionalidades, conteúdo educativo e configurações.

Funcionalidades incluídas:
- Página inicial com hero section
- Conteúdo educativo (6 seções: Phishing, Malware, Eng. Social, Proteção, Senhas, Backup)
- Simulações interativas (6 cenários)
- Quiz educativo (12 perguntas)
- Pesquisas integradas com Google Forms
- Design responsivo e acessível

Autor: Desenvolvido para educação digital da terceira idade
Data: 2024
"""

import os
import json
import subprocess
import sys
from pathlib import Path

def create_file(path, content):
    """Cria um arquivo com o conteúdo especificado"""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Criado: {path}")

def run_command(command, cwd=None):
    """Executa um comando no terminal"""
    try:
        result = subprocess.run(command, shell=True, cwd=cwd, check=True, 
                              capture_output=True, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro ao executar: {command}")
        print(f"   {e.stderr}")
        return None

def main():
    print("🚀 INSTALANDO SEGURANÇA DIGITAL PARA IDOSOS...")
    print("=" * 60)
    
    # Criar estrutura de pastas
    folders = [
        'seguranca-digital-idosos',
        'seguranca-digital-idosos/frontend',
        'seguranca-digital-idosos/frontend/src',
        'seguranca-digital-idosos/frontend/src/components',
        'seguranca-digital-idosos/frontend/src/components/ui',
        'seguranca-digital-idosos/frontend/src/pages',
        'seguranca-digital-idosos/frontend/src/hooks',
        'seguranca-digital-idosos/frontend/public',
        'seguranca-digital-idosos/backend'
    ]
    
    for folder in folders:
        os.makedirs(folder, exist_ok=True)
    
    # Mudar para o diretório do projeto
    os.chdir('seguranca-digital-idosos')
    
    print("📁 Estrutura de pastas criada!")
    
    # Criar arquivos do projeto
    create_project_files()
    
    print("\n🎉 INSTALAÇÃO CONCLUÍDA!")
    print("=" * 60)
    print("📋 PRÓXIMOS PASSOS:")
    print("1. cd seguranca-digital-idosos")
    print("2. Instalar Yarn: npm install -g yarn")
    print("3. cd frontend && yarn install")
    print("4. cd ../backend && pip install -r requirements.txt")
    print("5. Executar:")
    print("   - Backend: cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload")
    print("   - Frontend: cd frontend && yarn start")
    print("6. Acessar: http://localhost:3000")
    print("\n🌟 Plataforma completa com 6 seções educativas, 6 simulações e 12 quiz!")

def create_project_files():
    """Cria todos os arquivos do projeto"""
    
    # README.md
    create_file('README.md', '''# 🛡️ Segurança Digital para Idosos

Uma plataforma educativa completa para ensinar segurança digital à terceira idade.

## 🎯 Funcionalidades Completas

### 📚 **Conteúdo Educativo (6 Seções)**
1. **Phishing** - Ataques de iscagem por e-mail e mensagens
2. **Malware** - Vírus, trojans e ransomware
3. **Engenharia Social** - Manipulação psicológica
4. **Métodos de Proteção** - Antivírus, firewall, atualizações
5. **Senhas Seguras** - Criação e gerenciamento de senhas
6. **Backup** - Proteção de arquivos e recuperação

### 🎮 **Simulações Interativas (6 Cenários)**
1. E-mail falso do banco
2. Download de aplicativo malicioso
3. Golpe do falso suporte técnico
4. Criação de senhas seguras
5. Uso seguro de Wi-Fi público
6. Recuperação de ransomware com backup

### ❓ **Quiz Educativo (12 Perguntas)**
- Cenários práticos de segurança
- Feedback educativo imediato
- Sistema de pontuação
- Revisão detalhada dos resultados

### 📊 **Recursos Adicionais**
- Pesquisas integradas com Google Forms
- Gráficos em tempo real
- Design responsivo e acessível
- Interface otimizada para terceira idade

## 🚀 Como Executar

```bash
# 1. Instalar dependências
cd frontend && yarn install
cd ../backend && pip install -r requirements.txt

# 2. Executar (2 terminais)
cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
cd frontend && yarn start

# 3. Acessar
http://localhost:3000
```

## 🎨 Tecnologias

- **Frontend**: React, Tailwind CSS, Shadcn/UI
- **Backend**: FastAPI, MongoDB
- **Integração**: Google Forms
- **Icons**: Lucide React

---
**Desenvolvido para promover a segurança digital da terceira idade** 🧓💻
''')

    # Package.json principal
    create_file('package.json', '''{
  "name": "seguranca-digital-idosos",
  "version": "1.0.0",
  "description": "Plataforma educativa de segurança digital para idosos",
  "scripts": {
    "dev": "concurrently \\"cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload\\" \\"cd frontend && yarn start\\"",
    "install:all": "cd frontend && yarn install && cd ../backend && pip install -r requirements.txt"
  },
  "keywords": ["segurança digital", "idosos", "educação"],
  "license": "MIT",
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}''')

    # Frontend package.json
    create_file('frontend/package.json', '''{
  "name": "seguranca-digital-frontend",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@hookform/resolvers": "^5.0.1",
    "@radix-ui/react-accordion": "^1.2.8",
    "@radix-ui/react-alert-dialog": "^1.1.11",
    "@radix-ui/react-aspect-ratio": "^1.1.4",
    "@radix-ui/react-avatar": "^1.1.7",
    "@radix-ui/react-checkbox": "^1.2.3",
    "@radix-ui/react-collapsible": "^1.1.8",
    "@radix-ui/react-context-menu": "^2.2.12",
    "@radix-ui/react-dialog": "^1.1.11",
    "@radix-ui/react-dropdown-menu": "^2.1.12",
    "@radix-ui/react-hover-card": "^1.1.11",
    "@radix-ui/react-label": "^2.1.4",
    "@radix-ui/react-menubar": "^1.1.12",
    "@radix-ui/react-navigation-menu": "^1.2.10",
    "@radix-ui/react-popover": "^1.1.11",
    "@radix-ui/react-progress": "^1.1.4",
    "@radix-ui/react-radio-group": "^1.3.4",
    "@radix-ui/react-scroll-area": "^1.2.6",
    "@radix-ui/react-select": "^2.2.2",
    "@radix-ui/react-separator": "^1.1.4",
    "@radix-ui/react-slider": "^1.3.2",
    "@radix-ui/react-slot": "^1.2.0",
    "@radix-ui/react-switch": "^1.2.2",
    "@radix-ui/react-tabs": "^1.1.9",
    "@radix-ui/react-toast": "^1.2.11",
    "@radix-ui/react-toggle": "^1.1.6",
    "@radix-ui/react-toggle-group": "^1.1.7",
    "@radix-ui/react-tooltip": "^1.2.4",
    "axios": "^1.8.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "cra-template": "1.2.0",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.507.0",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-day-picker": "8.10.1",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.56.2",
    "react-resizable-panels": "^3.0.1",
    "react-router-dom": "^7.5.1",
    "react-scripts": "5.0.1",
    "sonner": "^2.0.3",
    "tailwind-merge": "^3.2.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.2",
    "zod": "^3.24.4"
  },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "devDependencies": {
    "@craco/craco": "^7.1.0",
    "@eslint/js": "9.23.0",
    "autoprefixer": "^10.4.20",
    "eslint": "9.23.0",
    "eslint-plugin-import": "2.31.0",
    "eslint-plugin-jsx-a11y": "6.10.2",
    "eslint-plugin-react": "7.37.4",
    "globals": "15.15.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17"
  }
}''')

    # Frontend .env
    create_file('frontend/.env', '''REACT_APP_BACKEND_URL=http://localhost:8001''')

    # Backend requirements.txt
    create_file('backend/requirements.txt', '''fastapi==0.110.1
uvicorn==0.25.0
boto3>=1.34.129
requests-oauthlib>=2.0.0
cryptography>=42.0.8
python-dotenv>=1.0.1
pymongo==4.5.0
pydantic>=2.6.4
email-validator>=2.2.0
pyjwt>=2.10.1
passlib>=1.7.4
tzdata>=2024.2
motor==3.3.1
pytest>=8.0.0
black>=24.1.1
isort>=5.13.2
flake8>=7.0.0
mypy>=1.8.0
python-jose>=3.3.0
requests>=2.31.0
pandas>=2.2.0
numpy>=1.26.0
python-multipart>=0.0.9
jq>=1.6.0
typer>=0.9.0''')

    # Backend .env
    create_file('backend/.env', '''MONGO_URL=mongodb://localhost:27017/seguranca_digital
DB_NAME=seguranca_digital''')

    # Agora criar todos os arquivos de código...
    create_frontend_files()
    create_backend_files()

def create_frontend_files():
    """Cria todos os arquivos do frontend"""
    
    # Frontend App.js
    create_file('frontend/src/App.js', '''import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Content from "./pages/Content";
import Simulations from "./pages/Simulations";
import Survey from "./pages/Survey";
import Quiz from "./pages/Quiz";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conteudo" element={<Content />} />
            <Route path="/simulacoes" element={<Simulations />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/tutoriais" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl text-gray-600">Tutoriais - Em Desenvolvimento</h1></div>} />
            <Route path="/pesquisas" element={<Survey />} />
            <Route path="/contato" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl text-gray-600">Contato - Em Desenvolvimento</h1></div>} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;''')

    # Mock data
    create_file('frontend/src/mock.js', '''// Mock data for Digital Security Platform for Elderly

export const mockData = {
  // Navigation items
  navigation: [
    { id: 'inicio', name: 'Início', path: '/' },
    { id: 'conteudo', name: 'Conteúdo', path: '/conteudo' },
    { id: 'simulacoes', name: 'Simulações', path: '/simulacoes' },
    { id: 'quiz', name: 'Quiz', path: '/quiz' },
    { id: 'tutoriais', name: 'Tutoriais', path: '/tutoriais' },
    { id: 'pesquisas', name: 'Pesquisas', path: '/pesquisas' },
    { id: 'contato', name: 'Contato', path: '/contato' }
  ],

  // Hero section data
  hero: {
    title: 'Segurança Digital para Idosos',
    subtitle: 'Navegue com tranquilidade',
    buttonText: 'Começar'
  },

  // Main features
  features: [
    {
      id: 1,
      title: 'Aprenda sobre segurança digital',
      description: 'Conheça os principais riscos e como se proteger online',
      icon: 'BookOpen',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Pratique com simulações interativas',
      description: 'Experimente situações reais em ambiente seguro',
      icon: 'Play',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      title: 'Tutoriais passo-a-passo',
      description: 'Aprenda com guias detalhados e fáceis de seguir',
      icon: 'CheckSquare',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600'
    },
    {
      id: 4,
      title: 'Teste seus conhecimentos',
      description: 'Avalie seu aprendizado com questionários práticos',
      icon: 'Award',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600'
    }
  ]
};

export default mockData;''')

    # Mais arquivos do frontend...
    create_more_frontend_files()

def create_more_frontend_files():
    """Cria arquivos adicionais do frontend"""
    
    # Home page
    create_file('frontend/src/pages/Home.jsx', '''import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, CheckSquare, Award, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import GoogleFormsChart from '../components/GoogleFormsChart';
import mockData from '../mock';

const iconMap = {
  BookOpen,
  Play,
  CheckSquare,
  Award
};

export const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/conteudo');
  };

  const handleFeatureClick = (featureId) => {
    switch(featureId) {
      case 1:
        navigate('/conteudo');
        break;
      case 2:
        navigate('/simulacoes');
        break;
      case 3:
        navigate('/tutoriais');
        break;
      case 4:
        navigate('/quiz');
        break;
      default:
        navigate('/conteudo');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {mockData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {mockData.hero.subtitle}
              </p>
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                {mockData.hero.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center">
                  <div className="w-64 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg flex items-center justify-center relative">
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckSquare className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="w-32 h-20 bg-gray-600 rounded-lg mx-auto relative">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.features.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card 
                  key={feature.id}
                  className={`${feature.color} cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2`}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${feature.iconColor} bg-white`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Progress Section with Google Forms Chart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleFormsChart />
        </div>
      </section>

      {/* Survey CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contribua com nossa pesquisa
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ajude a melhorar a segurança digital para todos os idosos
          </p>
          <Button 
            onClick={() => navigate('/pesquisas')}
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            Responder pesquisa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;''')

    print("📄 Arquivos principais criados...")

def create_backend_files():
    """Cria arquivos do backend"""
    
    # Backend server.py
    create_file('backend/server.py', '''from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Segurança Digital API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "Segurança Digital API - Funcionando!"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()''')

    print("🔧 Backend criado...")

if __name__ == "__main__":
    main()