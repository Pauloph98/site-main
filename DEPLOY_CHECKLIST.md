# ✅ CHECKLIST DE DEPLOY - COPIE E MARQUE CADA ETAPA

## 🔴 PARTE 1: BACKEND NO RENDER (10 minutos)

### Etapa 1.1: Criar Conta
- [ ] Acessar: https://render.com
- [ ] Clicar em "Get Started"
- [ ] Login com GitHub (Pauloph98)

### Etapa 1.2: Criar Web Service
- [ ] Clicar em "New +" → "Web Service"
- [ ] Selecionar repositório: **Pauloph98/site-main**
- [ ] Preencher:
  - Name: `seguranca-digital-backend`
  - Runtime: `Python 3`
  - Branch: `main`
  - Build Command: `pip install -r backend/requirements.txt`
  - Start Command: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`
  - Instance Type: **Free** ✅

### Etapa 1.3: Variáveis de Ambiente
- [ ] Clicar na aba "Environment"
- [ ] Adicionar estas variáveis (copie e cole):

```
DB_HOST=sh00046.hostgator.com.br
DB_PORT=3306
DB_USER=paul1199_pauloph10
DB_PASSWORD=Paulo@99470578
DB_NAME=paul1199_segurancadigital
ALLOWED_ORIGINS=http://localhost:3000
```

### Etapa 1.4: Deploy
- [ ] Clicar em "Create Web Service"
- [ ] Aguardar 3-5 minutos
- [ ] ✅ Copiar a URL gerada (ex: https://seguranca-digital-backend.onrender.com)
- [ ] Testar no navegador: `SUA-URL/api/survey-responses/stats`
- [ ] ✅ Se aparecer `{"total_responses": 0, ...}` está OK!

📝 **ANOTE A URL AQUI:** [______________________________________](https://seguranca-digital-backend.onrender.com)

---

## 🔵 PARTE 2: FRONTEND NO NETLIFY (5 minutos)

### Etapa 2.1: Atualizar URL no Código
- [ ] Abrir VS Code
- [ ] Abrir arquivo: `frontend/.env.production`
- [ ] Substituir a URL pela URL do Render que você anotou acima
- [ ] Salvar o arquivo
- [ ] No terminal: `git add .`
- [ ] No terminal: `git commit -m "Atualizar URL do backend"`
- [ ] No terminal: `git push origin main`

### Etapa 2.2: Criar Conta Netlify
- [ ] Acessar: https://www.netlify.com
- [ ] Clicar em "Sign up"
- [ ] Login com GitHub

### Etapa 2.3: Criar Site
- [ ] Clicar em "Add new site" → "Import an existing project"
- [ ] Conectar ao GitHub
- [ ] Selecionar: **Pauloph98/site-main**
- [ ] Preencher:
  - Branch: `main`
  - Base directory: `frontend`
  - Build command: `yarn build`
  - Publish directory: `frontend/build`

### Etapa 2.4: Deploy
- [ ] Clicar em "Deploy site"
- [ ] Aguardar 2-3 minutos
- [ ] ✅ Copiar a URL gerada (ex: https://random-name-123.netlify.app)

### Etapa 2.5: Personalizar Nome (Opcional)
- [ ] Ir em "Site settings" → "Domain management"
- [ ] Clicar em "Options" → "Edit site name"
- [ ] Mudar para: `seguranca-digital-idosos`
- [ ] Nova URL: `https://seguranca-digital-idosos.netlify.app`

📝 **ANOTE A URL DO SITE:** ______________________________________

---

## 🟢 PARTE 3: CONECTAR TUDO (2 minutos)

### Etapa 3.1: Atualizar CORS
- [ ] Voltar ao Render
- [ ] Ir em "Environment" do backend
- [ ] Editar `ALLOWED_ORIGINS`
- [ ] Adicionar a URL do Netlify que você anotou:
```
ALLOWED_ORIGINS=https://seu-site.netlify.app,http://localhost:3000
```
- [ ] Salvar (redeploy automático ~1 min)

---

## 🎯 TESTE FINAL

- [ ] Abrir o site no Netlify
- [ ] Testar navegação (Home, Cartilha, Simulações)
- [ ] Fazer o Pré-Teste completo
- [ ] Responder a Pesquisa
- [ ] Ver o Dashboard
- [ ] ✅ Verificar se dados aparecem no Dashboard

---

## 🎉 PRONTO! SEU SITE ESTÁ NO AR!

### 📊 Seus Links:
- **Site:** https://seu-site.netlify.app
- **API:** https://seu-backend.onrender.com
- **Banco de Dados:** phpMyAdmin Hostgator

### 📱 Compartilhe:
Envie o link do Netlify para os idosos testarem!

### 🔄 Atualizações Futuras:
Qualquer mudança no código:
1. Edite o arquivo no VS Code
2. `git add .`
3. `git commit -m "Descrição da mudança"`
4. `git push origin main`
5. ✅ Deploy automático em 2-3 minutos!

---

## ⚠️ PROBLEMAS COMUNS:

### ❌ Erro 500 no backend
- Verifique as variáveis de ambiente no Render
- Veja os logs: Render → Logs → Deploy Logs

### ❌ Site não carrega
- Aguarde 1-2 minutos (primeira requisição demora ~30s)
- Verifique o build no Netlify

### ❌ Dados não salvam
- Verifique se a URL do backend está correta no `.env.production`
- Teste a API direto no navegador

---

**Boa sorte! 🚀**
