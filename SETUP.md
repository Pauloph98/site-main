# 🚀 Guia de Configuração Completo

## 📋 Pré-requisitos (Verificar se tem instalado)

### ✅ Verificar instalações existentes:

```bash
# Verificar Node.js
node --version

# Verificar Python
python --version

# Verificar Git
git --version

# Verificar se tem VS Code
code --version
```

## 📦 1. Instalar Yarn

```bash
# Instalar Yarn globalmente
npm install -g yarn

# Verificar instalação
yarn --version
```

## 🔧 2. Configurar MongoDB (Opcional - para desenvolvimento local)

### Opção A: MongoDB Local
1. Baixe em: https://www.mongodb.com/try/download/community
2. Instale seguindo as instruções
3. Inicie o serviço

### Opção B: MongoDB Atlas (Recomendado)
1. Crie conta em: https://www.mongodb.com/atlas
2. Crie um cluster gratuito
3. Obtenha a string de conexão
4. Atualize a variável `MONGO_URL` no arquivo `.env` do backend

## 🚀 3. Executar a Aplicação

### Método 1: Executar tudo de uma vez
```bash
# Na raiz do projeto
npm run install:all  # Instala todas as dependências
npm run dev          # Executa frontend e backend juntos
```

### Método 2: Executar separadamente

**Terminal 1 - Backend:**
```bash
cd backend
python -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

## 🌐 4. Acessar a Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **Documentação API**: http://localhost:8001/docs

## 🔧 5. Configuração de Variáveis de Ambiente

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017/seguranca_digital
DB_NAME=seguranca_digital
```

## ❗ Solução de Problemas Comuns

### Problema: Yarn não reconhecido
**Solução:**
```bash
npm install -g yarn
# Reinicie o terminal
```

### Problema: Porta 3000 já em uso
**Solução:**
```bash
# Mate o processo na porta 3000
npx kill-port 3000
# Ou escolha outra porta quando perguntado
```

### Problema: Erro de permissão Python
**Solução:**
```bash
# Use ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

### Problema: MongoDB não conecta
**Solução:**
1. Verifique se o MongoDB está rodando
2. Confirme a string de conexão no `.env`
3. Use MongoDB Atlas se tiver problemas locais

## 📱 6. Testando as Funcionalidades

1. **Página Inicial**: Navegue pelas seções
2. **Conteúdo**: Teste as abas de conteúdo educativo
3. **Simulações**: Execute as simulações interativas
4. **Quiz**: Complete o quiz de 8 perguntas
5. **Pesquisas**: Teste a integração com Google Forms

## 🎯 7. Desenvolvimento

### Estrutura de Pastas:
```
📦 Projeto/
├── 📁 frontend/          # React App
├── 📁 backend/           # FastAPI Server
├── 📄 README.md          # Documentação principal
├── 📄 SETUP.md          # Este arquivo
└── 📄 package.json      # Scripts do projeto
```

### Comandos Úteis:
```bash
# Instalar nova dependência no frontend
cd frontend && yarn add nome-da-dependencia

# Instalar nova dependência no backend
cd backend && pip install nome-da-dependencia
pip freeze > requirements.txt

# Fazer build de produção
npm run build
```

## 🤝 8. Próximos Passos

1. Customize o conteúdo conforme necessário
2. Configure integração real com Google Forms
3. Adicione mais simulações e quiz
4. Implemente autenticação se necessário
5. Configure deploy em produção

---

**🎉 Parabéns! Sua aplicação está configurada e funcionando!**