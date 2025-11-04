# 🚀 Guia Completo: Migrar do Netlify para Vercel

## 📋 Checklist Antes de Começar

- [x] Código no GitHub (Pauloph98/site-main)
- [x] Backend configurado para aceitar Vercel (CORS atualizado)
- [ ] Conta na Vercel (vamos criar)
- [ ] Backend hospedado (Render/Railway) - opcional

---

## 🎯 Passo 1: Criar Conta na Vercel

1. Acesse: **https://vercel.com/**
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar seus repositórios
5. ✅ Conta criada!

---

## 🔗 Passo 2: Importar Projeto do GitHub

1. No dashboard da Vercel, clique em **"Add New..."**
2. Selecione **"Project"**
3. Na lista de repositórios, encontre: **Pauloph98/site-main**
4. Clique em **"Import"**

---

## ⚙️ Passo 3: Configurar Build Settings

A Vercel vai detectar automaticamente que é um projeto React, mas confirme:

```
Framework Preset: Create React App ✅ (auto-detectado)
Root Directory: frontend
Build Command: npm run build ✅ (auto)
Output Directory: build ✅ (auto)
Install Command: npm install ✅ (auto)
```

**IMPORTANTE:** Defina o **Root Directory** como `frontend`

---

## 🔐 Passo 4: Adicionar Variáveis de Ambiente

**ANTES de clicar em Deploy**, adicione a variável:

1. Na seção **"Environment Variables"**
2. Clique em **"Add"**
3. Preencha:

```
Name: REACT_APP_BACKEND_URL
Value: http://localhost:8001
```

**OU** se você já hospedou o backend:
```
Name: REACT_APP_BACKEND_URL
Value: https://seu-backend.onrender.com
```

4. Selecione todos os ambientes:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Clique em **"Add"**

---

## 🚀 Passo 5: Deploy!

1. Clique no botão azul **"Deploy"**
2. Aguarde ~30-60 segundos
3. 🎉 **Deploy concluído!**

Você receberá uma URL como:
```
https://site-main-seu-usuario.vercel.app
```

---

## 🔧 Passo 6: Atualizar Backend (CORS)

### Se você ainda NÃO hospedou o backend:

**O backend já está configurado!** Quando você hospedar no Render/Railway, ele vai aceitar requisições da Vercel automaticamente.

### Se você JÁ hospedou o backend:

Adicione a URL específica da Vercel nas variáveis de ambiente do backend:

**No Render/Railway:**
```
ALLOWED_ORIGINS=http://localhost:3000,https://site-main-seu-usuario.vercel.app
```

Substitua `site-main-seu-usuario.vercel.app` pela sua URL real.

---

## ✅ Passo 7: Testar a Aplicação

1. Acesse sua URL Vercel: `https://site-main-seu-usuario.vercel.app`
2. Navegue pelas páginas
3. Faça um teste (quiz)
4. Acesse o dashboard: `https://site-main-seu-usuario.vercel.app/dashboard`
   - Usuário: `admin`
   - Senha: `Ph@842972`

---

## 🔄 Deploy Automático

**A partir de agora:**
- Toda vez que você fizer `git push` no GitHub
- A Vercel faz deploy automático
- Branch `main` → Produção
- Outras branches → Preview (URL temporária)

---

## 🗑️ Desativar/Excluir do Netlify (Opcional)

Se você quiser remover o site do Netlify:

1. Acesse: https://app.netlify.com/
2. Vá em **"Sites"**
3. Clique no seu projeto
4. **"Site settings"** → **"General"**
5. Role até o final → **"Delete this site"**

---

## 🎨 Personalizar Domínio (Opcional)

### Domínio Vercel (.vercel.app)

Por padrão você ganha: `site-main-xyz.vercel.app`

Para personalizar:
1. No painel do projeto na Vercel
2. **"Settings"** → **"Domains"**
3. Digite o nome desejado: `seguranca-digital-idosos.vercel.app`

### Domínio Próprio (.com.br, .com)

Se você tiver um domínio:
1. **"Settings"** → **"Domains"**
2. **"Add"** → Digite seu domínio
3. Configure DNS conforme instruções da Vercel

---

## 📊 Comparação: Netlify vs Vercel

| Recurso | Netlify | Vercel |
|---------|---------|--------|
| Deploy Speed | 2-3 min | < 1 min ⚡ |
| React/Next.js | Suporte | Nativo ✅ |
| Preview PRs | ✅ | ✅ |
| Analytics | 💰 Pago | ✅ Grátis (básico) |
| Build Cache | Básico | Inteligente ✅ |
| Edge Network | ✅ | ✅ Otimizado |

---

## 🐛 Troubleshooting

### Erro: "Page Not Found" ao recarregar

✅ **Já está resolvido!** O arquivo `vercel.json` na raiz do projeto já configura o SPA routing.

### Erro: Backend não responde

1. Verifique a variável `REACT_APP_BACKEND_URL`
2. Confirme que o backend está rodando
3. Verifique CORS no backend (já configurado)

### Erro: Build falhou

1. Verifique se `Root Directory` = `frontend`
2. Confirme que `package.json` está correto
3. Veja logs detalhados no painel da Vercel

---

## 📝 Comandos Git Úteis

```bash
# Fazer alterações e deploy
git add .
git commit -m "Atualizar frontend"
git push origin main

# A Vercel faz deploy automático! 🚀
```

---

## 🎯 Próximos Passos

Depois de hospedar na Vercel:

1. [ ] Hospedar backend no Render/Railway
2. [ ] Atualizar `REACT_APP_BACKEND_URL` na Vercel
3. [ ] Testar todas as funcionalidades
4. [ ] Compartilhar URL com o professor
5. [ ] Fazer testes de usabilidade com idosos

---

## 📞 Suporte

**Documentação Vercel:** https://vercel.com/docs
**Status:** https://vercel-status.com/

---

**Criado para o TCC - Segurança Digital para Idosos**  
**UNIALFA 2025**
