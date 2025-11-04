# 🛡️ Segurança Cibernética para Idosos

**TCC - Trabalho de Conclusão de Curso**  
**Instituição:** UNIALFA - Centro Universitário Alves Faria  
**Aluno:** Paulo Henrique Pereira Silva Barros  
**Orientador:** Prof. Yhury Silva Rezende  
**Curso:** Ciência da Computação  
**Ano:** 2025

---

Uma plataforma educativa completa para ensinar segurança cibernética à terceira idade, desenvolvida com React, FastAPI e MySQL. O projeto inclui conteúdo educativo em áudio, simulações interativas, quiz de avaliação e dashboard administrativo com análise estatística de resultados.

## 📋 Funcionalidades

### Para Usuários (Idosos)
- **🏠 Página Inicial**: Interface intuitiva com navegação simplificada
- **📚 Cartilha Digital**: Conteúdo educativo sobre 5 temas de segurança:
  - 🎣 Phishing e Golpes Virtuais
  - 🔐 Senhas Seguras
  - 📱 Redes Sociais Seguras
  - 🛒 Compras Online Seguras
  - 🔒 Proteção de Dispositivos
- **🔊 Áudio Narrado**: Todos os capítulos com narração em português (gTTS)
- **🎮 Simulações Interativas**: 5 cenários práticos de segurança digital
- **📝 Pesquisa de Perfil**: Formulário demográfico e de conhecimento
- **❓ Pré-teste e Pós-teste**: Quiz de 20 questões para medir aprendizado
- **📱 Design Responsivo**: Otimizado para desktop, tablet e celular
- **♿ Acessibilidade**: Interface com alto contraste e fontes grandes

### Para Administradores
- **🔐 Dashboard Protegido**: Acesso com login e senha
- **📊 Estatísticas em Tempo Real**: Gráficos de resultados dos testes
- **📈 Análise Comparativa**: Comparação pré-teste vs pós-teste
- **👥 Dados Demográficos**: Análise de perfil dos participantes
- **📉 Taxa de Acerto**: Visualização de desempenho por questão

---

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js** 20+ (frontend React)
- **Python** 3.8+ (backend FastAPI)
- **MySQL** 5.7+ ou 8.0+ (banco de dados)
- **npm** ou **yarn** (gerenciador de pacotes)

### Opção 1: 🐳 Instalação com Docker (Recomendado)

```bash
# Clone o repositório
git clone https://github.com/Pauloph98/site-main.git
cd site-main

# Suba os containers
docker-compose up -d

# Acesse a aplicação
# Frontend: http://localhost:3000
# Backend API: http://localhost:8001
```

### Opção 2: 💻 Instalação Manual (Desenvolvimento)

#### 1. 📥 Clone o repositório
```bash
git clone https://github.com/Pauloph98/site-main.git
cd site-main
```

#### 2. 🗄️ Configure o Banco de Dados MySQL

**Opção A: MySQL Local**
```bash
# Crie o banco de dados
mysql -u root -p
CREATE DATABASE paul1199_segurancadigital CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;

# Importe o seed (dados de exemplo)
mysql -u root -p paul1199_segurancadigital < seed.sql
```

**Opção B: MySQL Hostgator (Produção)**
```bash
mysql -u paul1199_pauloph10 -p -h sh00046.hostgator.com.br -P 3306 paul1199_segurancadigital < seed.sql
# Senha: Paulo@99470578
```

#### 3. 🔧 Configure o Backend (Python/FastAPI)

```bash
cd backend

# Crie ambiente virtual (recomendado)
python -m venv venv

# Ative o ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt

# Configure variáveis de ambiente
# Crie arquivo .env com:
```

**backend/.env**:
```env
# MySQL Local
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=paul1199_segurancadigital

# OU MySQL Hostgator (Produção)
DB_HOST=sh00046.hostgator.com.br
DB_PORT=3306
DB_USER=paul1199_pauloph10
DB_PASSWORD=Paulo@99470578
DB_NAME=paul1199_segurancadigital

# CORS
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

#### 4. 🎨 Configure o Frontend (React)

```bash
cd frontend

# Instale as dependências
npm install
# ou
yarn install

# Configure variáveis de ambiente (opcional)
# Crie arquivo .env com:
```

**frontend/.env** (opcional):
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

#### 5. 🚀 Execute a Aplicação

**Terminal 1 - Backend (API)**:
```bash
cd backend
# Com ambiente virtual ativado:
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend (React)**:
```bash
cd frontend
npm start
# ou
yarn start
```

#### 6. 🌐 Acesse a Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **Dashboard Admin**: http://localhost:3000/dashboard
  - **Usuário**: `admin`
  - **Senha**: `Ph@842972`

---

## 📦 Popular Banco de Dados (Seed)

### Método 1: Script Python (Recomendado)
```bash
cd backend
python seed_database.py
```

### Método 2: SQL Direto
```bash
mysql -u usuario -p -h host paul1199_segurancadigital < seed.sql
```

### Método 3: Exportar Dados Atuais
```bash
cd backend
python export_seed.py
# Gera seed.sql com dados reais do banco
```

**O seed contém:**
- 2 registros de quiz (pré-teste e pós-teste)
- 1 registro de pesquisa demográfica
- Estrutura completa das tabelas

---

## 🌐 Hospedagem e Acesso Online (Produção)

### 🎨 Frontend
- **Plataforma**: Vercel
- **URL**: *[Aguardando configuração final]*
- **Deploy**: Automático via GitHub (main branch)
- **Framework**: React (detectado automaticamente)
- **Build Command**: `npm run build`
- **Output Directory**: `build/`

### 🔧 Backend (API)
- **Plataforma**: Render / Railway / Heroku
- **URL**: *[Aguardando deploy]*
- **Porta**: 8001
- **Framework**: FastAPI + Uvicorn

### 🗄️ Banco de Dados
- **Provedor**: Hostgator MySQL
- **Host**: sh00046.hostgator.com.br
- **Porta**: 3306
- **Database**: paul1199_segurancadigital
- **Acesso**: cPanel Hostgator + phpMyAdmin

### 📊 Status da Hospedagem
| Serviço | Provedor | Status |
|---------|----------|--------|
| Frontend | Vercel | ⏳ Aguardando deploy |
| Backend API | Render/Railway | ⏳ Aguardando deploy |
| Banco MySQL | Hostgator | ✅ Ativo |

---


## 📁 Estrutura do Projeto

```
📦 site-main/
├── 📁 frontend/                    # Aplicação React
│   ├── 📁 public/                  # Arquivos públicos
│   │   └── 📄 index.html
│   ├── 📁 src/
│   │   ├── 📁 components/          # Componentes reutilizáveis
│   │   │   ├── � Header.jsx       # Cabeçalho
│   │   │   ├── 📄 Footer.jsx       # Rodapé
│   │   │   ├── 📄 LoginForm.jsx    # Formulário de login
│   │   │   ├── 📄 ProgressChart.jsx # Gráfico de progresso
│   │   │   └── �📁 ui/              # Componentes shadcn/ui
│   │   ├── 📁 pages/               # Páginas da aplicação
│   │   │   ├── 📄 Home.jsx         # Página inicial
│   │   │   ├── 📄 Cartilha.jsx     # Conteúdo educativo
│   │   │   ├── 📄 Simulations.jsx  # Simulações
│   │   │   ├── 📄 Survey.jsx       # Pesquisa de perfil
│   │   │   ├── 📄 PreQuiz.jsx      # Pré-teste
│   │   │   ├── 📄 Quiz.jsx         # Pós-teste
│   │   │   └── 📄 Dashboard.jsx    # Dashboard admin
│   │   ├── 📄 App.js               # Componente principal
│   │   ├── 📄 index.js             # Entry point
│   │   └── 📄 mock.js              # Dados de demonstração
│   ├── 📄 package.json             # Dependências do frontend
│   ├── 📄 tailwind.config.js       # Configuração Tailwind
│   └── 📄 craco.config.js          # Configuração CRACO
│
├── 📁 backend/                     # API FastAPI
│   ├── 📄 server.py                # Servidor principal
│   ├── 📄 database.py              # Conexão MySQL
│   ├── 📄 seed_database.py         # Popula banco com dados
│   ├── 📄 export_seed.py           # Exporta dados para SQL
│   ├── 📄 validate_seed.py         # Valida seed.sql
│   ├── 📄 requirements.txt         # Dependências Python
│   └── 📄 .env                     # Variáveis de ambiente
│
├── 📁 tests/                       # Testes automatizados
│   └── 📄 __init__.py
│
├── 📄 seed.sql                     # Dados de exemplo (SQL)
├── 📄 docker-compose.yml           # Configuração Docker
├── 📄 README.md                    # Este arquivo
├── 📄 SETUP.md                     # Guia de setup detalhado
├── 📄 package.json                 # Scripts do projeto
├── 📄 TERMO_CONSENTIMENTO.md       # Termo de consentimento
├── 📄 POLITICA_PRIVACIDADE.md      # Política de privacidade
└── 📄 Cartilha_Seguranca_Digital_Idosos.md  # Conteúdo educativo
```

---

## 🎯 Páginas e Rotas

| Rota | Descrição | Acesso |
|------|-----------|--------|
| `/` | Página inicial com apresentação do projeto | Público |
| `/cartilha` | Conteúdo educativo com 5 capítulos + áudio | Público |
| `/simulacoes` | 5 simulações interativas de segurança | Público |
| `/pesquisa` | Pesquisa de perfil demográfico | Público |
| `/pre-quiz` | Pré-teste (20 questões) antes do treinamento | Público |
| `/quiz` | Pós-teste (20 questões) após o treinamento | Público |
| `/dashboard` | Dashboard administrativo com estatísticas | **Restrito** |

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19.0.0 | Framework JavaScript |
| **React Router DOM** | 7.9.2 | Navegação SPA |
| **Tailwind CSS** | 3.4.17 | Estilização |
| **shadcn/ui** | Latest | Componentes UI |
| **Lucide React** | Latest | Ícones |
| **Recharts** | 2.15.0 | Gráficos interativos |
| **Axios** | 1.7.9 | Requisições HTTP |

### Backend
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **FastAPI** | 0.115.6 | Framework API REST |
| **Uvicorn** | 0.34.0 | Servidor ASGI |
| **PyMySQL** | 1.1.1 | Driver MySQL |
| **Python-dotenv** | 1.0.1 | Variáveis de ambiente |
| **gTTS** | 2.5.4 | Text-to-Speech (áudio) |

### Banco de Dados
- **MySQL** 5.7+ / 8.0+
- **Hostgator** (Produção): sh00046.hostgator.com.br

### Infraestrutura
- **Docker** & **Docker Compose**: Containerização
- **Netlify**: Hospedagem frontend (deploy contínuo)
- **Hostgator**: Hospedagem MySQL

---

## 📊 Banco de Dados

### Tabelas

#### **quiz_results** - Resultados dos Testes
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK) | ID único |
| `user_name` | VARCHAR(255) | Nome do participante |
| `user_age_range` | VARCHAR(50) | Faixa etária |
| `score` | INT | Pontuação obtida |
| `total_questions` | INT | Total de questões |
| `test_type` | VARCHAR(50) | `pre-teste` ou `pos-teste` |
| `answers` | JSON | Respostas detalhadas |
| `timestamp` | DATETIME | Data/hora do teste |

#### **survey_responses** - Respostas da Pesquisa
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | INT (PK) | ID único |
| `nome_completo` | VARCHAR(255) | Nome completo |
| `faixa_etaria` | VARCHAR(50) | Faixa etária |
| `frequencia_internet` | VARCHAR(100) | Frequência de uso da internet |
| `seguranca_navegacao` | VARCHAR(100) | Confiança ao navegar |
| `vitima_golpe_virtual` | VARCHAR(50) | Já foi vítima de golpe |
| `ligacao_golpe` | VARCHAR(50) | Recebeu ligação de golpe |
| `conhece_vitima` | VARCHAR(50) | Conhece vítima de golpe |
| `mensagem_suspeita` | VARCHAR(100) | Comportamento com mensagens |
| `seguranca_banco` | VARCHAR(100) | Confiança em banco online |
| `compartilha_senhas` | VARCHAR(50) | Compartilha senhas |
| `criacao_senhas` | VARCHAR(100) | Como cria senhas |
| `atualiza_apps` | VARCHAR(100) | Frequência de atualização |
| `conhece_phishing` | VARCHAR(50) | Conhecimento sobre phishing |
| `importancia_site` | VARCHAR(100) | Importância do site |
| `timestamp` | DATETIME | Data/hora da resposta |

---

## 🚀 Deploy em Produção

### 📦 Deploy do Frontend (Vercel)

1. **Criar conta no Vercel**: https://vercel.com/
2. **Importar projeto**: Import Git Repository → GitHub
3. **Selecionar repositório**: Pauloph98/site-main
4. **Configurações de Build**:
   ```
   Framework Preset: Create React App
   Root Directory: frontend
   Build Command: npm run build (detectado automaticamente)
   Output Directory: build (detectado automaticamente)
   Install Command: npm install
   ```
5. **Variáveis de Ambiente** (Settings → Environment Variables):
   ```
   REACT_APP_BACKEND_URL=https://seu-backend.onrender.com
   ```
6. **Deploy**: Automático a cada push na branch `main`

**Vantagens da Vercel:**
- ✅ Deploy instantâneo (< 1 minuto)
- ✅ Preview automático de Pull Requests
- ✅ CDN global (Edge Network)
- ✅ SSL/HTTPS automático
- ✅ Domínio .vercel.app grátis
- ✅ Integração nativa com React

### 🔧 Deploy do Backend (Render/Railway)

**Opção A - Render** (Recomendado):
1. Criar conta: https://render.com/
2. Novo Web Service → Conectar GitHub
3. Configurações:
   ```
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```
4. Variáveis de ambiente:
   ```
   DB_HOST=sh00046.hostgator.com.br
   DB_PORT=3306
   DB_USER=paul1199_pauloph10
   DB_PASSWORD=Paulo@99470578
   DB_NAME=paul1199_segurancadigital
   ALLOWED_ORIGINS=https://seu-site.netlify.app
   ```

**Opção B - Railway**:
1. Criar conta: https://railway.app/
2. New Project → Deploy from GitHub
3. Configurar variáveis de ambiente (mesmas acima)

### 🗄️ Banco de Dados (Hostgator)

**Já está configurado e ativo:**
- Host: sh00046.hostgator.com.br
- Acesso via cPanel → phpMyAdmin
- Backup regular recomendado

### 📋 Checklist de Deploy

- [ ] Frontend no Vercel
- [ ] Backend no Render/Railway
- [ ] Configurar variáveis de ambiente no Vercel
- [ ] Atualizar CORS no backend (adicionar URL Vercel)
- [ ] Atualizar REACT_APP_BACKEND_URL no Vercel
- [ ] Testar endpoints da API
- [ ] Testar dashboard com login
- [ ] Verificar funcionamento dos testes
- [ ] Confirmar SSL (HTTPS) - automático na Vercel
- [ ] Configurar domínio customizado (opcional)

---

## �🔐 Acesso Administrativo

### Dashboard

**URL**: http://localhost:3000/dashboard

**Credenciais**:
- **Usuário**: `admin`
- **Senha**: `Ph@842972`

### Funcionalidades do Dashboard
- 📊 **Estatísticas Gerais**: Total de participantes, média de acertos
- 📈 **Gráfico de Evolução**: Comparação pré-teste vs pós-teste
- 👥 **Dados Demográficos**: Distribuição por faixa etária
- 📉 **Taxa de Acerto por Questão**: Análise detalhada
- 🔄 **Atualização em Tempo Real**: Dados sincronizados com o banco

---

## 🎨 Design e Acessibilidade

### Princípios de Design
- ✅ **Alto Contraste**: Cores contrastantes para melhor visibilidade
- ✅ **Fontes Grandes**: Tamanhos de texto legíveis (16px mínimo)
- ✅ **Navegação Intuitiva**: Menu simples e claro
- ✅ **Feedback Visual**: Respostas e ações claramente indicadas
- ✅ **Responsividade**: Layout adaptável (mobile-first)

### Acessibilidade (WCAG 2.1)
- ♿ **Leitores de Tela**: Suporte a NVDA/JAWS
- ⌨️ **Navegação por Teclado**: Tab, Enter, Esc
- 🎯 **Áreas de Clique**: Mínimo 44x44px
- 📢 **Áudio Narrado**: Todos os capítulos com narração
- 🌈 **Contraste**: Razão mínima 4.5:1

---

## � Metodologia de Pesquisa (TCC)

### Tipo de Pesquisa
- **Abordagem**: Quantitativa e Qualitativa
- **Natureza**: Aplicada
- **Método**: Quasi-experimental (pré-teste e pós-teste)

### Coleta de Dados
1. **Pesquisa Demográfica**: Perfil dos participantes
2. **Pré-teste**: Avaliação de conhecimento inicial (20 questões)
3. **Intervenção**: Acesso ao conteúdo educativo e simulações
4. **Pós-teste**: Avaliação de conhecimento final (20 questões)

### Análise Estatística
- **Teste de Wilcoxon**: Comparação pré-teste vs pós-teste
- **Significância**: p < 0.05
- **Software**: Python (SciPy, Pandas)

### Critérios de Inclusão
- ✅ Idade igual ou superior a 60 anos
- ✅ Alfabetização digital básica
- ✅ Acesso a dispositivo com internet
- ✅ Consentimento via TCLE

---

## 📈 API Endpoints

### Quiz Results

**GET** `/api/quiz-results/stats`
```json
{
  "totalResults": 2,
  "preTestAvg": 6.0,
  "postTestAvg": 20.0,
  "improvement": 14.0,
  "improvementPercent": 233.33
}
```

### Survey Responses

**GET** `/api/survey-responses/stats`
```json
{
  "totalResponses": 1,
  "ageDistribution": {
    "Menos de 50 anos": 1
  },
  "internetFrequency": {
    "Todos os dias": 1
  }
}
```

### Health Check

**GET** `/health`
```json
{
  "status": "ok",
  "database": "connected"
}
```

---

## 🐳 Docker

### Comandos Úteis

```bash
# Subir containers
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down

# Rebuild
docker-compose up --build

# Remover volumes
docker-compose down -v
```

### Portas

- **Frontend**: 3000
- **Backend**: 8001
- **MySQL**: 3306

---

## 🧪 Testes

### Testes Manuais
```bash
# Testar backend
curl http://localhost:8001/health

# Testar endpoints
curl http://localhost:8001/api/quiz-results/stats
curl http://localhost:8001/api/survey-responses/stats
```

### Testes de Acessibilidade
- **Lighthouse**: Performance, Accessibility, Best Practices, SEO
- **WAVE**: Validação WCAG 2.1
- **axe DevTools**: Análise de acessibilidade

---

## 📝 Documentos do TCC

- **TERMO_CONSENTIMENTO.md**: Termo de Consentimento Livre e Esclarecido (TCLE)
- **POLITICA_PRIVACIDADE.md**: Política de Privacidade e LGPD
- **Cartilha_Seguranca_Digital_Idosos.md**: Conteúdo educativo completo
- **SETUP.md**: Guia detalhado de instalação
- **seed.sql**: Dados de exemplo para demonstração

---

## 🤝 Contribuindo

Este é um projeto acadêmico (TCC), mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📞 Contato

**Aluno**: Paulo Henrique Pereira Silva Barros  
**Email**: [seu-email@exemplo.com]  
**GitHub**: [@Pauloph98](https://github.com/Pauloph98)  
**Instituição**: UNIALFA - Centro Universitário Alves Faria  
**Orientador**: Prof. Yhury Silva Rezende

---

## � Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## � Agradecimentos

- **Prof. Yhury Silva Rezende**: Orientação e suporte
- **UNIALFA**: Infraestrutura e recursos
- **Participantes da Pesquisa**: Contribuição valiosa
- **Comunidade Open Source**: Bibliotecas e ferramentas

---

**Desenvolvido com ❤️ para promover a segurança cibernética da terceira idade**

*Última atualização: Novembro de 2025*