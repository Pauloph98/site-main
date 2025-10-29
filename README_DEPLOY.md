# 🚀 Guia de Deploy - Segurança Digital para Idosos

## 📋 Pré-requisitos

- Conta no GitHub (já tem ✅)
- Conta no Render.com (gratuita)
- Git configurado localmente

---

## 🔧 Passo 1: Subir para o GitHub

### 1.1 Verificar status do repositório
```bash
git status
```

### 1.2 Adicionar todos os arquivos
```bash
git add .
```

### 1.3 Fazer commit das alterações
```bash
git commit -m "feat: Adiciona configurações para deploy no Render"
```

### 1.4 Fazer push para o GitHub
```bash
git push origin main
```

---

## 🌐 Passo 2: Deploy no Render

### 2.1 Criar conta no Render
1. Acesse [render.com](https://render.com)
2. Clique em "Get Started for Free"
3. Faça login com sua conta GitHub

### 2.2 Conectar Repositório
1. No dashboard do Render, clique em "New +"
2. Selecione "Blueprint"
3. Conecte seu repositório GitHub `Pauloph98/site-main`
4. O Render detectará automaticamente o arquivo `render.yaml`

### 2.3 Configurar Variáveis de Ambiente

**Para o Backend:**
- Nenhuma variável adicional necessária (SQLite local)

**Para o Frontend:**
Após o backend estar rodando, você precisará:
1. Pegar a URL do backend (ex: `https://seguranca-digital-backend.onrender.com`)
2. Criar arquivo `.env` no frontend com:
   ```
   REACT_APP_BACKEND_URL=https://SEU-BACKEND-URL.onrender.com
   ```

### 2.4 Iniciar Deploy
1. Clique em "Apply"
2. Aguarde o build (5-10 minutos)
3. Anote as URLs geradas:
   - Backend: `https://seguranca-digital-backend.onrender.com`
   - Frontend: `https://seguranca-digital-frontend.onrender.com`

---

## 🔄 Passo 3: Conectar Frontend ao Backend

### 3.1 Atualizar variável de ambiente
No Render, vá em:
1. Frontend Service → Environment
2. Adicione: `REACT_APP_BACKEND_URL` = URL do seu backend
3. Clique em "Save Changes"
4. O frontend será reconstruído automaticamente

### 3.2 Atualizar CORS no Backend (se necessário)
Se houver problemas de CORS, atualize `backend/server.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://seguranca-digital-frontend.onrender.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## ✅ Verificação

### Teste o Backend
```bash
curl https://SEU-BACKEND.onrender.com/api/quiz-results
```

### Teste o Frontend
Acesse: `https://SEU-FRONTEND.onrender.com`

---

## 🐛 Problemas Comuns

### 1. Backend não inicia
- Verifique os logs no Render
- Confirme que `requirements.txt` está correto
- Verifique se o comando de start está correto

### 2. Frontend não conecta ao Backend
- Confirme que `REACT_APP_BACKEND_URL` está configurada
- Verifique CORS no backend
- Use HTTPS (não HTTP)

### 3. Banco de dados não persiste
- Certifique-se que o disco persistente está configurado
- Verifique se o `mountPath` está correto no `render.yaml`

---

## 📊 Monitoramento

- **Logs**: Acesse via dashboard do Render
- **Métricas**: Render mostra CPU, memória e requests
- **Alertas**: Configure notificações no Render

---

## 🔄 Atualizações Futuras

Para atualizar o site:
1. Faça alterações no código local
2. Commit: `git commit -am "descrição da mudança"`
3. Push: `git push origin main`
4. Render fará deploy automático!

---

## 💰 Custos

- **Plano Free do Render:**
  - ✅ 750 horas/mês (suficiente para 1 serviço 24/7)
  - ✅ Sites estáticos ilimitados
  - ✅ 100GB de largura de banda
  - ⚠️ Serviços "dormem" após 15min de inatividade (acordam em ~30s)

- **Upgrade para Paid ($7/mês por serviço):**
  - ✅ Sem sleep
  - ✅ Mais recursos
  - ✅ Suporte prioritário

---

## 🆘 Suporte

- Documentação Render: [render.com/docs](https://render.com/docs)
- Community: [community.render.com](https://community.render.com)
- Status: [status.render.com](https://status.render.com)

---

## 🎉 Pronto!

Seu site estará online e acessível para qualquer pessoa com:
- ✅ HTTPS automático (seguro)
- ✅ Deploy automático a cada push
- ✅ Escalabilidade
- ✅ Monitoramento

**URL final:** `https://seguranca-digital-frontend.onrender.com`
