# 🚂 Deploy no Railway - Guia Completo

## Por que Railway?

✅ **Disco persistente GRATUITO** - SQLite funciona perfeitamente!
✅ **$5 de crédito grátis por mês** - Suficiente para projeto acadêmico
✅ **Dados não são perdidos** - Banco SQLite persiste entre deployments
✅ **Sem mudanças no código** - Funciona exatamente como está

---

## 📋 Passo a Passo

### 1. Criar Conta no Railway

1. Acesse: [https://railway.app](https://railway.app)
2. Clique em **"Start a New Project"**
3. Faça login com sua conta **GitHub**

### 2. Criar Novo Projeto

1. No dashboard, clique em **"New Project"**
2. Selecione **"Deploy from GitHub repo"**
3. Escolha: **`Pauloph98/site-main`**
4. Railway detectará automaticamente o projeto Python

### 3. Configurar Variáveis de Ambiente

No projeto criado:

1. Clique no serviço (backend)
2. Vá em **"Variables"**
3. Adicione:

```
ALLOWED_ORIGINS=https://SEU-FRONTEND-URL.up.railway.app
```

*(Você pegará essa URL depois de fazer deploy do frontend)*

### 4. Adicionar Volume Persistente (IMPORTANTE!)

Para manter o SQLite persistente:

1. No serviço backend, clique em **"Settings"**
2. Role até **"Volumes"**
3. Clique em **"+ New Volume"**
4. Configure:
   - **Mount Path:** `/app/backend`
   - Clique em **"Add"**

Isso garante que `quiz_results.db` nunca será perdido! 💾

### 5. Deploy!

1. Railway fará deploy automaticamente
2. Aguarde ~5 minutos
3. Copie a URL gerada (algo como: `https://xxx.up.railway.app`)

---

## 🎨 Deploy do Frontend (Netlify)

### 1. Criar Conta no Netlify

1. Acesse: [https://netlify.com](https://netlify.com)
2. Faça login com GitHub

### 2. Novo Site

1. Clique em **"Add new site"** → **"Import an existing project"**
2. Escolha GitHub e selecione: **`Pauloph98/site-main`**
3. Configure:

```
Base directory: frontend
Build command: yarn build
Publish directory: frontend/build
```

4. Adicione variável de ambiente:

```
REACT_APP_BACKEND_URL=https://SEU-BACKEND.up.railway.app
```

5. Clique em **"Deploy site"**

---

## ✅ Verificação

### Testar Backend
```bash
curl https://SEU-BACKEND.up.railway.app/api/quiz-results/stats
```

### Testar Frontend
Acesse: `https://SEU-FRONTEND.netlify.app`

---

## 💰 Custos

**Railway:**
- $5 grátis por mês
- Uso típico: ~$3-4/mês
- **Você fica dentro do crédito grátis!** 🎉

**Netlify:**
- 100% grátis para frontend
- Ilimitado

---

## 🔄 Atualizações Futuras

Ambos os serviços fazem deploy automático:
1. Você faz `git push` no GitHub
2. Railway e Netlify detectam
3. Fazem deploy automaticamente
4. Seu site é atualizado! 🚀

---

## 📊 Backup do Banco de Dados (Opcional)

Para fazer backup do SQLite:

1. Acesse Railway Dashboard
2. Vá no serviço backend
3. Clique em "Deployments"
4. Use o terminal para baixar:

```bash
railway run cat /app/backend/quiz_results.db > backup.db
```

---

## 🆘 Suporte

- Documentação Railway: [docs.railway.app](https://docs.railway.app)
- Documentação Netlify: [docs.netlify.com](https://docs.netlify.com)
- Community Railway: [discord.gg/railway](https://discord.gg/railway)

---

## ✨ Vantagens desta Solução

✅ **Dados persistentes** - SQLite mantém tudo
✅ **100% gratuito** (dentro dos créditos)
✅ **Zero mudanças no código** - Funciona como está
✅ **Deploy automático** - Push e pronto!
✅ **HTTPS incluído** - Seguro por padrão
✅ **Backup fácil** - Baixe o .db quando quiser

---

Pronto para análise do TCC! 📊🎓
