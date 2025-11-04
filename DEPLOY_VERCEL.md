# 🚀 Guia de Deploy - Vercel

## Frontend React na Vercel

### 📋 Passo a Passo

#### 1. Criar Conta e Importar Projeto
```
1. Acesse: https://vercel.com/
2. Clique em "Sign Up" → Conecte com GitHub
3. Após login, clique em "Add New..." → "Project"
4. Selecione o repositório: Pauloph98/site-main
5. Clique em "Import"
```

#### 2. Configurar Build Settings

A Vercel detectará automaticamente que é um projeto React, mas configure:

```
Framework Preset: Create React App
Root Directory: frontend
Build Command: npm run build (ou deixe automático)
Output Directory: build (ou deixe automático)
Install Command: npm install (ou deixe automático)
```

#### 3. Configurar Variáveis de Ambiente

**IMPORTANTE**: Adicione antes do primeiro deploy!

```
Nome: REACT_APP_BACKEND_URL
Valor: https://seu-backend.onrender.com (ou URL do seu backend)
```

**Como adicionar:**
1. Na página de configuração do projeto
2. Vá em "Environment Variables"
3. Adicione a variável
4. Selecione: Production, Preview, Development (todos)

#### 4. Deploy

```
1. Clique em "Deploy"
2. Aguarde ~30-60 segundos
3. ✅ Seu site estará no ar!
```

**URL gerada:** `https://seu-projeto.vercel.app`

---

## 🔧 Após o Deploy

### Atualizar Backend (CORS)

No arquivo `backend/server.py`, adicione a URL da Vercel:

```python
origins = [
    "http://localhost:3000",
    "https://seu-projeto.vercel.app",  # ← Adicione aqui
]
```

### Testar a Aplicação

1. Acesse: `https://seu-projeto.vercel.app`
2. Navegue pelas páginas
3. Faça um teste (pré-quiz ou pós-quiz)
3. Acesse o dashboard: `https://seu-projeto.vercel.app/dashboard`
   - Usuário: admin
   - Senha: Ph@842972

---

## 🔄 Deploy Automático

**Toda vez que você fizer push no GitHub:**
- Vercel faz deploy automático
- Branch `main` → Produção
- Outras branches → Preview

---

## ⚙️ Configurações Avançadas (Opcional)

### Domínio Customizado

```
1. No painel da Vercel, vá em "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: seguranca-digital.com.br)
4. Siga as instruções de configuração DNS
```

### Environment Variables para Preview

Se quiser backend diferente para preview:

```
Production: https://api-producao.onrender.com
Preview: https://api-preview.onrender.com
Development: http://localhost:8001
```

---

## 🐛 Troubleshooting

### Erro: "Module not found"
```bash
# No diretório frontend:
rm -rf node_modules
rm package-lock.json
npm install
git add .
git commit -m "fix: reinstall dependencies"
git push
```

### Erro 404 nas rotas
- Já configurado no `vercel.json` (SPA routing)
- Todas as rotas redirecionam para `index.html`

### Backend não responde
1. Verifique se o backend está rodando
2. Confirme a URL em Environment Variables
3. Verifique CORS no backend

---

## 📊 Métricas e Analytics

A Vercel fornece automaticamente:
- ✅ Performance metrics
- ✅ Real-time logs
- ✅ Deployment history
- ✅ Analytics (com upgrade)

Acesse em: **Dashboard → seu-projeto → Analytics**

---

## 💡 Dicas

1. **Preview URLs**: Cada PR gera uma URL de preview automática
2. **Rollback**: Pode voltar para deploy anterior em 1 clique
3. **Logs**: Acesse logs em tempo real no dashboard
4. **Speed Insights**: Ative para ver métricas de performance
5. **Edge Network**: Seu site é servido de mais de 70 locais globalmente

---

## 📋 Checklist Pós-Deploy

- [ ] Site acessível na URL Vercel
- [ ] Todas as páginas funcionando
- [ ] Testes (quiz) funcionando
- [ ] Dashboard acessível com login
- [ ] Backend conectado (dados carregando)
- [ ] CORS configurado no backend
- [ ] SSL/HTTPS ativo (automático)
- [ ] Domínio customizado (opcional)

---

**Deploy concluído! 🎉**

URL do projeto: https://seu-projeto.vercel.app
