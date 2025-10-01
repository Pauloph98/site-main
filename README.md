# 🛡️ Segurança Digital para Idosos

Uma plataforma educativa completa para ensinar segurança digital à terceira idade, desenvolvida com React, FastAPI e MongoDB.

## 📋 Funcionalidades

- **🏠 Página Inicial**: Hero section com navegação intuitiva
- **📚 Conteúdo Educativo**: Guias sobre Phishing, Malware, Engenharia Social, Métodos de Proteção e Senhas Seguras
- **🎮 Simulações Interativas**: Cenários reais de segurança digital
- **❓ Quiz Educativo**: 8 perguntas sobre segurança digital com feedback
- **📊 Pesquisas**: Integração com Google Forms e gráficos em tempo real
- **📱 Design Responsivo**: Otimizado para todas as idades e dispositivos

## 🚀 Como Instalar e Executar

### Pré-requisitos
- Node.js 16+ 
- Python 3.8+
- MongoDB (local ou Atlas)
- Yarn (será instalado no passo a passo)

### 1. 📥 Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/seguranca-digital-idosos.git
cd seguranca-digital-idosos
```

### 2. 📦 Instale o Yarn (se não tiver)
```bash
npm install -g yarn
```

### 3. 🔧 Configure o Frontend
```bash
cd frontend
yarn install
```

### 4. 🔧 Configure o Backend
```bash
cd ../backend
pip install -r requirements.txt
```

### 5. ⚙️ Configure as Variáveis de Ambiente

**Frontend (.env)**:
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env)**:
```env
MONGO_URL=mongodb://localhost:27017/seguranca_digital
DB_NAME=seguranca_digital
```

### 6. 🚀 Execute a Aplicação

**Terminal 1 - Backend**:
```bash
cd backend
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend**:
```bash
cd frontend
yarn start
```

### 7. 🌐 Acesse a Aplicação
- Frontend: http://localhost:3000
- Backend API: http://localhost:8001

## 📁 Estrutura do Projeto

```
📦 seguranca-digital-idosos/
├── 📁 frontend/                 # Aplicação React
│   ├── 📁 src/
│   │   ├── 📁 components/       # Componentes reutilizáveis
│   │   ├── 📁 pages/           # Páginas da aplicação
│   │   ├── 📄 mock.js          # Dados de demonstração
│   │   └── 📄 App.js           # Componente principal
│   ├── 📄 package.json         # Dependências do frontend
│   └── 📄 .env                 # Variáveis de ambiente
├── 📁 backend/                  # API FastAPI
│   ├── 📄 server.py            # Servidor principal
│   ├── 📄 requirements.txt     # Dependências do backend
│   └── 📄 .env                 # Variáveis de ambiente
└── 📄 README.md                # Este arquivo
```

## 🎯 Páginas Disponíveis

- **/** - Página inicial com hero section e funcionalidades
- **/conteudo** - Conteúdo educativo sobre segurança digital
- **/simulacoes** - Simulações interativas de cenários reais
- **/quiz** - Quiz educativo com 8 perguntas
- **/pesquisas** - Pesquisas integradas com Google Forms
- **/tutoriais** - Tutoriais passo-a-passo (em desenvolvimento)
- **/contato** - Página de contato (em desenvolvimento)

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Shadcn/UI Components
- Lucide React Icons
- Axios

### Backend
- FastAPI
- MongoDB (Motor)
- Pydantic
- Python-dotenv
- Uvicorn

## 📊 Integração Google Forms

A aplicação está integrada com Google Forms para coleta de dados de pesquisas em tempo real. Os gráficos são atualizados automaticamente conforme novas respostas são recebidas.

## 🎨 Design

- Interface amigável para idosos
- Cores contrastantes para melhor visibilidade
- Fontes grandes e legíveis
- Navegação intuitiva
- Feedback visual claro

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub ou entre em contato.

---

**Desenvolvido com ❤️ para promover a segurança digital da terceira idade**