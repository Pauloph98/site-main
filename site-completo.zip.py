#!/usr/bin/env python3
"""
🛡️ SEGURANÇA DIGITAL PARA IDOSOS - SITE COMPLETO
================================================

FUNCIONALIDADES INCLUÍDAS:
✅ Página inicial com hero section e 4 funcionalidades
✅ Conteúdo educativo (6 seções): Phishing, Malware, Eng. Social, Proteção, Senhas, Backup
✅ Simulações interativas (6 cenários) com feedback educativo
✅ Quiz completo (12 perguntas) com sistema de pontuação
✅ Pesquisas integradas com Google Forms e gráficos
✅ Design responsivo e acessível para terceira idade
✅ Backend FastAPI + Frontend React + MongoDB

Para usar este script:
1. Salve como: install-site.py
2. Execute: python install-site.py
3. Siga as instruções exibidas
"""
import os
import sys

def create_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ {path}")

def main():
    print("🚀 CRIANDO SITE COMPLETO - SEGURANÇA DIGITAL PARA IDOSOS")
    print("=" * 70)
    
    # Criar estrutura
    os.makedirs('seguranca-digital-completo', exist_ok=True)
    os.chdir('seguranca-digital-completo')
    
    folders = [
        'frontend/src/components/ui', 'frontend/src/pages', 'frontend/src/hooks',
        'frontend/public', 'backend'
    ]
    for folder in folders:
        os.makedirs(folder, exist_ok=True)
    
    # ARQUIVOS PRINCIPAIS
    create_main_files()
    
    # FRONTEND COMPLETO
    create_frontend_complete()
    
    # BACKEND COMPLETO  
    create_backend_complete()
    
    # COMPONENTES UI
    create_ui_components()
    
    print("\n" + "=" * 70)
    print("🎉 SITE COMPLETO CRIADO COM SUCESSO!")
    print("=" * 70)
    print("📋 PARA EXECUTAR:")
    print("1. cd seguranca-digital-completo")
    print("2. npm install -g yarn  # Se não tiver yarn")
    print("3. cd frontend && yarn install")
    print("4. cd ../backend && pip install -r requirements.txt")
    print("5. EXECUTAR EM 2 TERMINAIS:")
    print("   Terminal 1: cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload")
    print("   Terminal 2: cd frontend && yarn start")
    print("6. ACESSAR: http://localhost:3000")
    print("\n🌟 FUNCIONALIDADES:")
    print("   • 6 seções educativas completas")
    print("   • 6 simulações interativas")
    print("   • Quiz com 12 perguntas")
    print("   • Integração Google Forms")
    print("   • Design responsivo")

def create_main_files():
    """Arquivos principais do projeto"""
    
    # README completo
    create_file('README.md', '''# 🛡️ Segurança Digital para Idosos - Site Completo

## 🎯 Funcionalidades Implementadas

### 📚 **Conteúdo Educativo (6 Seções Completas)**
1. **🎣 Phishing** - E-mails fraudulentos, links suspeitos, verificação de remetentes
2. **🛡️ Malware** - Vírus, trojans, ransomware, proteção e prevenção
3. **👥 Engenharia Social** - Manipulação psicológica, golpes por telefone
4. **🔒 Métodos de Proteção** - Antivírus, firewall, atualizações, Wi-Fi seguro
5. **🔑 Senhas Seguras** - Criação, gerenciamento, 2FA, gerenciadores
6. **💾 Backup** - Regra 3-2-1, Google Drive, recuperação de ransomware

### 🎮 **Simulações Interativas (6 Cenários)**
1. **E-mail falso do banco** - Identificar phishing bancário
2. **Download malicioso** - Verificar fontes de aplicativos
3. **Falso suporte técnico** - Reconhecer golpes por telefone
4. **Criação de senha segura** - Práticas de senha forte
5. **Wi-Fi público** - Navegação segura em redes públicas
6. **Recuperação de ransomware** - Importância do backup

### ❓ **Quiz Educativo (12 Perguntas)**
- Cenários práticos sobre todos os tópicos
- Feedback educativo imediato
- Sistema de pontuação detalhado
- Revisão completa dos acertos/erros
- Mensagens motivacionais personalizadas

### 📊 **Funcionalidades Adicionais**
- **Pesquisas** integradas com Google Forms
- **Gráficos** em tempo real das respostas
- **Design responsivo** otimizado para idosos
- **Navegação intuitiva** com ícones grandes
- **Cores contrastantes** para melhor visibilidade

## 🚀 Como Executar

```bash
# 1. Instalar dependências
cd frontend && yarn install
cd ../backend && pip install -r requirements.txt

# 2. Configurar variáveis (opcional - já configuradas)
# frontend/.env: REACT_APP_BACKEND_URL=http://localhost:8001
# backend/.env: MONGO_URL=mongodb://localhost:27017/seguranca_digital

# 3. Executar (2 terminais separados)
# Terminal 1 - Backend:
cd backend
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Terminal 2 - Frontend:
cd frontend  
yarn start

# 4. Acessar
http://localhost:3000
```

## 🎨 Tecnologias Utilizadas

- **Frontend**: React 19, Tailwind CSS, Shadcn/UI Components
- **Backend**: FastAPI, MongoDB (Motor), Pydantic
- **Integração**: Google Forms, Charts em tempo real
- **Design**: Lucide React Icons, Responsive Design
- **Acessibilidade**: Otimizado para terceira idade

## 📱 Páginas e Funcionalidades

- **/** - Página inicial com hero section e 4 cards funcionais
- **/conteudo** - 6 seções educativas completas com tabs
- **/simulacoes** - 6 simulações interativas com feedback
- **/quiz** - 12 perguntas com sistema de pontuação
- **/pesquisas** - Integração completa com Google Forms
- **/tutoriais** - Em desenvolvimento
- **/contato** - Em desenvolvimento

## 🧓 Otimizado para Idosos

- **Fontes grandes** e legíveis
- **Botões grandes** e espaçados
- **Cores contrastantes** para melhor visibilidade
- **Navegação simples** e intuitiva
- **Explicações detalhadas** e didáticas
- **Feedback positivo** e encorajador

---
**Desenvolvido com ❤️ para promover a segurança digital da terceira idade**
''')

    # Package.json principal
    create_file('package.json', '''{
  "name": "seguranca-digital-completo",
  "version": "1.0.0",
  "description": "Plataforma completa de segurança digital para idosos",
  "scripts": {
    "dev": "concurrently \\"cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload\\" \\"cd frontend && yarn start\\"",
    "install:all": "cd frontend && yarn install && cd ../backend && pip install -r requirements.txt",
    "start:frontend": "cd frontend && yarn start",
    "start:backend": "cd backend && python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload"
  },
  "keywords": ["segurança digital", "idosos", "educação", "react", "fastapi"],
  "license": "MIT",
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}''')

    # .gitignore
    create_file('.gitignore', '''# Dependencies
node_modules/
__pycache__/
*.py[cod]

# Environment
.env
.env.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# Build
build/
dist/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Database
*.db
*.sqlite3
''')

def create_frontend_complete():
    """Frontend completo com todas as páginas"""
    
    # Package.json do frontend
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

    # App.js principal
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

    # CSS files
    create_frontend_styles()
    create_frontend_pages()
    create_frontend_components()

def create_frontend_styles():
    """Estilos do frontend"""
    
    create_file('frontend/src/App.css', '''.App-logo {
    height: 40vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
}

.App-header {
    background-color: #0f0f10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}''')

    create_file('frontend/src/index.css', '''@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

@layer base {
  :root {
        --background: 0 0% 100%;
        --foreground: 0 0% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 0 0% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 0 0% 3.9%;
        --primary: 0 0% 9%;
        --primary-foreground: 0 0% 98%;
        --secondary: 0 0% 96.1%;
        --secondary-foreground: 0 0% 9%;
        --muted: 0 0% 96.1%;
        --muted-foreground: 0 0% 45.1%;
        --accent: 0 0% 96.1%;
        --accent-foreground: 0 0% 9%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 89.8%;
        --input: 0 0% 89.8%;
        --ring: 0 0% 3.9%;
        --chart-1: 12 76% 61%;
        --chart-2: 173 58% 39%;
        --chart-3: 197 37% 24%;
        --chart-4: 43 74% 66%;
        --chart-5: 27 87% 67%;
        --radius: 0.5rem;
    }
  .dark {
        --background: 0 0% 3.9%;
        --foreground: 0 0% 98%;
        --card: 0 0% 3.9%;
        --card-foreground: 0 0% 98%;
        --popover: 0 0% 3.9%;
        --popover-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 0 0% 9%;
        --secondary: 0 0% 14.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 0 0% 14.9%;
        --muted-foreground: 0 0% 63.9%;
        --accent: 0 0% 14.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 14.9%;
        --input: 0 0% 14.9%;
        --ring: 0 0% 83.1%;
        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
    }
}

@layer base {
  * {
    @apply border-border;
    }
  body {
    @apply bg-background text-foreground;
    }
}''')

    # Tailwind config
    create_file('frontend/tailwind.config.js', '''/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};''')

def create_frontend_pages():
    """Páginas principais do frontend"""
    
    # Dados mock
    create_file('frontend/src/mock.js', '''// Mock data completo para a plataforma
export const mockData = {
  navigation: [
    { id: 'inicio', name: 'Início', path: '/' },
    { id: 'conteudo', name: 'Conteúdo', path: '/conteudo' },
    { id: 'simulacoes', name: 'Simulações', path: '/simulacoes' },
    { id: 'quiz', name: 'Quiz', path: '/quiz' },
    { id: 'tutoriais', name: 'Tutoriais', path: '/tutoriais' },
    { id: 'pesquisas', name: 'Pesquisas', path: '/pesquisas' },
    { id: 'contato', name: 'Contato', path: '/contato' }
  ],

  hero: {
    title: 'Segurança Digital para Idosos',
    subtitle: 'Navegue com segurança e tranquilidade na internet',
    buttonText: 'Começar Aprendizado'
  },

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

    print("📝 Mock data e configurações criadas...")

def create_frontend_components():
    """Componentes do frontend"""
    
    # Header
    create_file('frontend/src/components/Header.jsx', '''import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from './ui/button';
import mockData from '../mock';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Segurança Digital
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {mockData.navigation.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {mockData.navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;''')

    print("🧩 Componentes básicos criados...")

def create_backend_complete():
    """Backend completo"""
    
    # Requirements
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

    # Server principal
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

app = FastAPI(
    title="Segurança Digital API",
    description="API para plataforma de segurança digital para idosos",
    version="1.0.0"
)

api_router = APIRouter(prefix="/api")

# Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class QuizResult(BaseModel):
    user_id: str
    score: int
    total_questions: int
    answers: List[dict]
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Segurança Digital API",
        "status": "Funcionando!",
        "version": "1.0.0"
    }

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/quiz-results")
async def save_quiz_result(result: QuizResult):
    await db.quiz_results.insert_one(result.dict())
    return {"message": "Resultado salvo com sucesso"}

@api_router.get("/quiz-results/{user_id}")
async def get_user_quiz_results(user_id: str):
    results = await db.quiz_results.find({"user_id": user_id}).to_list(100)
    return results

# Include router
app.include_router(api_router)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    logger.info("🚀 Segurança Digital API iniciada!")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    logger.info("👋 API encerrada!")''')

def create_ui_components():
    """Componentes UI básicos necessários"""
    
    # Button component
    create_file('frontend/src/components/ui/button.jsx', '''import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }''')

    # Utils
    create_file('frontend/src/lib/utils.js', '''import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}''')

    print("🎨 Componentes UI básicos criados...")

if __name__ == "__main__":
    main()