# 📦 Entrega TCC - Segurança Cibernética para Idosos

**Aluno:** Paulo Henrique Pereira Silva Barros  
**Orientador:** Prof. Yhury Silva Rezende  
**Instituição:** UNIALFA  
**Data:** Novembro 2025

---

## 📋 Arquivos da Entrega

### ✅ Documentação Principal
- **README.md** - Documentação completa do projeto
- **seed.sql** - Dados de exemplo para o banco MySQL
- **docker-compose.yml** - Configuração Docker para execução

### ✅ Código Fonte
- **frontend/** - Aplicação React (interface do usuário)
- **backend/** - API FastAPI (servidor e banco de dados)

---

## 🚀 Como Executar o Projeto

### Opção 1: Docker (Mais Fácil - Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/Pauloph98/site-main.git
cd site-main

# 2. Suba os containers
docker-compose up -d

# 3. Aguarde ~2 minutos para inicialização

# 4. Acesse a aplicação
# Frontend: http://localhost:3000
# Dashboard: http://localhost:3000/dashboard
```

**Credenciais do Dashboard:**
- Usuário: `admin`
- Senha: `Ph@842972`

### Opção 2: Instalação Manual

```bash
# 1. Configure o MySQL
mysql -u root -p
CREATE DATABASE paul1199_segurancadigital CHARACTER SET utf8mb4;
EXIT;
mysql -u root -p paul1199_segurancadigital < seed.sql

# 2. Backend (Terminal 1)
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
# Configure backend/.env com credenciais MySQL
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# 3. Frontend (Terminal 2)
cd frontend
npm install
npm start

# 4. Acesse http://localhost:3000
```

---

## 📊 Estrutura dos Dados (seed.sql)

### O que o seed.sql contém:

✅ **Estrutura das Tabelas:**
- `quiz_results` - Resultados de pré-testes e pós-testes
- `survey_responses` - Respostas da pesquisa demográfica

✅ **Dados de Exemplo:**
- 2 registros de quiz (1 pré-teste, 1 pós-teste)
- 1 registro de pesquisa
- Demonstra evolução de 30% → 100% de acertos

✅ **Seguro para Executar:**
- Usa `CREATE TABLE IF NOT EXISTS`
- Não sobrescreve tabelas existentes
- Pode ser reexecutado sem problemas

---

## 🎯 Funcionalidades Principais

### Para Usuários (Idosos)
1. **Cartilha Digital** - 5 capítulos com áudio narrado
2. **Simulações Interativas** - 5 cenários práticos
3. **Pesquisa de Perfil** - Coleta de dados demográficos
4. **Pré-teste** - 20 questões antes do treinamento
5. **Pós-teste** - 20 questões após o treinamento

### Para Administrador
1. **Dashboard Protegido** - Login com usuário/senha
2. **Estatísticas** - Análise de resultados
3. **Gráficos** - Comparação pré-teste vs pós-teste
4. **Dados Demográficos** - Perfil dos participantes

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 19
- React Router DOM 7.9.2
- Tailwind CSS 3.4.17
- shadcn/ui (Componentes)
- Recharts (Gráficos)

### Backend
- FastAPI 0.115.6
- PyMySQL 1.1.1
- Uvicorn 0.34.0
- gTTS 2.5.4 (Text-to-Speech)

### Banco de Dados
- MySQL 8.0
- Hostgator (Produção)

---

## 📁 Estrutura do Repositório

```
site-main/
├── README.md                    ← Documentação completa
├── seed.sql                     ← Dados de exemplo
├── docker-compose.yml           ← Configuração Docker
├── frontend/                    ← Aplicação React
│   ├── src/
│   │   ├── pages/              ← Páginas (Home, Quiz, Dashboard)
│   │   └── components/         ← Componentes reutilizáveis
│   ├── Dockerfile
│   └── package.json
├── backend/                     ← API FastAPI
│   ├── server.py               ← Servidor principal
│   ├── database.py             ← Conexão MySQL
│   ├── seed_database.py        ← Popula banco (alternativa)
│   ├── export_seed.py          ← Exporta dados para SQL
│   ├── Dockerfile
│   └── requirements.txt
└── tests/                       ← Testes automatizados
```

---

## 🔐 Credenciais

### Dashboard Administrativo
- **Usuário:** admin
- **Senha:** Ph@842972

### Banco MySQL (Docker)
- **Host:** localhost
- **Porta:** 3306
- **Usuário:** paul1199_pauloph10
- **Senha:** Paulo@99470578
- **Database:** paul1199_segurancadigital

### Banco MySQL (Produção Hostgator)
- **Host:** sh00046.hostgator.com.br
- **Porta:** 3306
- **Usuário:** paul1199_pauloph10
- **Senha:** Paulo@99470578
- **Database:** paul1199_segurancadigital

---

## ✅ Checklist de Funcionalidades

- [x] Interface responsiva e acessível
- [x] Conteúdo educativo com áudio
- [x] Simulações interativas
- [x] Pesquisa de perfil
- [x] Pré-teste e pós-teste
- [x] Dashboard administrativo protegido
- [x] Análise estatística de resultados
- [x] Banco de dados MySQL
- [x] API RESTful (FastAPI)
- [x] Docker e docker-compose
- [x] Seed com dados de exemplo
- [x] Documentação completa

---

## 🌐 Hospedagem em Produção

### Onde a Aplicação Está Hospedada:

**🎨 Frontend (Interface do Usuário)**
- **Plataforma**: Vercel
- **URL**: *[Aguardando deploy final]*
- **Vantagens**: 
  - Deploy automático via GitHub
  - SSL grátis (HTTPS)
  - CDN global + Edge Network
  - Preview de Pull Requests
  - Integração nativa com React
  - Deploy em < 1 minuto

**🔧 Backend (API)**
- **Plataforma**: Render ou Railway
- **URL**: *[Aguardando deploy]*
- **Vantagens**:
  - Free tier disponível
  - Suporte a Python/FastAPI
  - Auto-deploy do GitHub
  - SSL incluído

**🗄️ Banco de Dados**
- **Provedor**: Hostgator MySQL ✅ **ATIVO**
- **Host**: sh00046.hostgator.com.br
- **Acesso**: cPanel + phpMyAdmin
- **Backup**: Automático pelo Hostgator

### Status da Infraestrutura:
| Serviço | Provedor | Status | Custo |
|---------|----------|--------|-------|
| Frontend | Vercel | ⏳ A configurar | Grátis |
| Backend | Render/Railway | ⏳ A configurar | Grátis (tier free) |
| MySQL | Hostgator | ✅ Funcionando | Incluído no plano |

---

## 📞 Suporte

**Em caso de dúvidas:**
- GitHub: https://github.com/Pauloph98/site-main
- Email: [seu-email@exemplo.com]

---

## 🎓 Notas para Avaliação

### Diferenciais do Projeto:
1. ✅ **Áudio Narrado** - Todos os capítulos com narração em português
2. ✅ **Simulações Reais** - 5 cenários práticos de segurança
3. ✅ **Análise Estatística** - Comparação pré/pós-teste
4. ✅ **Dashboard Admin** - Interface para análise de dados
5. ✅ **Acessibilidade** - Design voltado para terceira idade
6. ✅ **Docker** - Fácil instalação e execução
7. ✅ **Dados Reais** - seed.sql com resultados reais de teste

### Metodologia Aplicada:
- Pesquisa quasi-experimental (pré-teste e pós-teste)
- Análise quantitativa de resultados
- Coleta de dados demográficos
- Interface adaptada para idosos

---

**Desenvolvido com dedicação para o TCC de Ciência da Computação - UNIALFA 2025**
