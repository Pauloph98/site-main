# 🚀 Guia de Deploy - Segurança Digital

## ✅ Status Atual
- ✅ Backend FastAPI com MySQL configurado
- ✅ Frontend React pronto
- ✅ Banco de dados MySQL no Hostgator
- ✅ Arquivos de configuração criados

---

## 📋 **PASSO 1: Deploy do Backend no Render (5 minutos)**

### 1.1 Criar conta no Render
1. Acesse: https://render.com
2. Clique em **"Get Started"**
3. Faça login com sua conta do **GitHub** (Pauloph98)

### 1.2 Criar novo Web Service
1. No dashboard do Render, clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório: **Pauloph98/site-main**
3. Configure:
   - **Name:** `seguranca-digital-backend`
   - **Runtime:** `Python 3`
   - **Branch:** `main`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Instance Type:** `Free` ✅

### 1.3 Adicionar Variáveis de Ambiente
Clique em **"Environment"** e adicione:

```
DB_HOST=sh00046.hostgator.com.br
DB_PORT=3306
DB_USER=paul1199_pauloph10
DB_PASSWORD=Paulo@99470578
DB_NAME=paul1199_segurancadigital
ALLOWED_ORIGINS=https://seu-site.netlify.app,http://localhost:3000
```

**⚠️ IMPORTANTE:** Você vai atualizar `ALLOWED_ORIGINS` depois que o frontend estiver no ar!

### 1.4 Deploy
1. Clique em **"Create Web Service"**
2. Aguarde o build (3-5 minutos)
3. Quando terminar, você terá uma URL tipo: `https://seguranca-digital-backend.onrender.com`
4. **Copie essa URL!** Você vai precisar dela no próximo passo

### 1.5 Testar o Backend
Acesse no navegador:
```
https://sua-url.onrender.com/api/survey-responses/stats
```

Se aparecer `{"total_responses": 0, ...}` está funcionando! ✅

---

## 📋 **PASSO 2: Deploy do Frontend no Netlify (3 minutos)**

### 2.1 Criar conta no Netlify
1. Acesse: https://www.netlify.com
2. Clique em **"Sign up"**
3. Faça login com sua conta do **GitHub**

### 2.2 Configurar a URL do Backend no Frontend

**ANTES de fazer o deploy**, você precisa atualizar o frontend para usar a URL do Render:

1. Abra o arquivo `frontend/src/App.js` (ou onde está a configuração da API)
2. Procure por `http://localhost:8001` ou `http://127.0.0.1:8001`
3. Substitua pela URL do Render que você copiou

**OU** crie uma variável de ambiente:
- Crie o arquivo `frontend/.env.production`:
```
REACT_APP_API_URL=https://sua-url.onrender.com
```

### 2.3 Criar novo Site
1. No dashboard do Netlify, clique em **"Add new site"** → **"Import an existing project"**
2. Conecte ao **GitHub** e selecione: **Pauloph98/site-main**
3. Configure:
   - **Branch:** `main`
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`

### 2.4 Deploy
1. Clique em **"Deploy site"**
2. Aguarde o build (2-3 minutos)
3. Você receberá uma URL tipo: `https://random-name-123.netlify.app`

### 2.5 Configurar domínio personalizado (opcional)
1. Vá em **"Site settings"** → **"Domain management"**
2. Clique em **"Options"** → **"Edit site name"**
3. Mude para algo como: `seguranca-digital-idosos.netlify.app`

---

## 📋 **PASSO 3: Conectar Frontend e Backend**

### 3.1 Atualizar CORS no Backend
1. Volte ao **Render**
2. Vá em **Environment** do seu backend
3. Atualize `ALLOWED_ORIGINS` com a URL do Netlify:
```
ALLOWED_ORIGINS=https://seu-site.netlify.app,http://localhost:3000
```
4. Salve e aguarde o redeploy automático

### 3.2 Testar a aplicação online
1. Acesse sua URL do Netlify
2. Teste o pré-teste, simulações, pesquisa, etc.
3. Verifique o dashboard para ver se os dados estão sendo salvos

---

## 🔍 **Verificar se está tudo funcionando:**

### ✅ Checklist:
- [ ] Backend responde em: `https://sua-url.onrender.com/api/survey-responses/stats`
- [ ] Frontend carrega em: `https://seu-site.netlify.app`
- [ ] Consegue fazer o pré-teste
- [ ] Consegue responder a pesquisa
- [ ] Dashboard mostra os dados
- [ ] Dados estão salvando no MySQL (verificar no phpMyAdmin do Hostgator)

---

## 🛠️ **Troubleshooting:**

### Problema: Backend retorna erro 500
- Verifique as variáveis de ambiente no Render
- Veja os logs no Render: **Logs** → **Deploy Logs**

### Problema: Frontend não conecta ao backend
- Verifique se atualizou a URL da API no código
- Verifique se adicionou a URL do Netlify no `ALLOWED_ORIGINS` do Render

### Problema: Dados não salvam
- Verifique a conexão MySQL no log do Render
- Teste a conexão MySQL diretamente

---

## 🎉 **Próximos Passos após Deploy:**

1. **Compartilhar o link:** Envie `https://seu-site.netlify.app` para os idosos
2. **Monitorar dados:** Acesse o phpMyAdmin para ver as respostas chegando
3. **Atualizar código:** Qualquer push no GitHub redeploya automaticamente!

---

## 📊 **Vantagens dessa arquitetura:**

✅ **Backend Render FREE:**
- Grátis permanentemente
- Deploy automático via GitHub
- Logs disponíveis
- ⚠️ Dorme após 15 min sem uso (primeira requisição demora ~30s)

✅ **Frontend Netlify:**
- Grátis permanentemente
- CDN global (super rápido)
- HTTPS automático
- Deploy automático via GitHub

✅ **MySQL Hostgator:**
- Dados 100% persistentes
- Acesso via phpMyAdmin
- Backup fácil
- Independente da hospedagem do código

---

## 📞 **Precisa de ajuda?**

Se algo der errado:
1. Verifique os logs no Render
2. Teste a API diretamente no navegador
3. Verifique o console do navegador (F12)
4. Me chame! 😊

---

**Boa sorte com o deploy! 🚀**
