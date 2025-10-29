# 📊 Guia de Migração para MySQL

## ✅ Por que MySQL é Melhor para seu Caso

**Vantagens:**
- ✅ Dados 100% seguros e persistentes
- ✅ Banco separado da aplicação
- ✅ Funciona em QUALQUER plataforma de hospedagem (Render FREE, Vercel, Railway, etc.)
- ✅ Não precisa de disco persistente pago
- ✅ Acesso direto aos dados via MySQL Workbench
- ✅ Backup automático (maioria dos hosts)
- ✅ Mais profissional e escalável

---

## 🔧 Mudanças Realizadas

### Arquivos Modificados:
1. ✅ `backend/requirements.txt` - Adicionado PyMySQL
2. ✅ `backend/database.py` - Novo arquivo com conexão MySQL
3. ✅ `backend/server.py` - Atualizado para usar MySQL
4. ✅ `backend/.env.mysql.example` - Template de configuração

### Mudanças Principais:
- **SQLite → MySQL**: Troca de banco de dados
- **Placeholders**: `?` → `%s` (sintaxe MySQL)
- **Tipos de dados**: INTEGER → INT, TEXT → VARCHAR, etc.
- **JSON nativo**: MySQL suporta tipo JSON
- **Índices**: Adicionados para melhor performance

---

## 🎯 Como Configurar

### 1. Instalar Dependências Localmente

```powershell
cd backend
pip install -r requirements.txt
```

### 2. Configurar Banco MySQL

Você mencionou que tem plano de hospedagem MySQL. Você precisa:

**Informações necessárias:**
- 📌 **Host**: URL do servidor MySQL (ex: `mysql.suahost.com`)
- 📌 **Porta**: Geralmente `3306`
- 📌 **Usuário**: Seu usuário MySQL
- 📌 **Senha**: Sua senha MySQL
- 📌 **Nome do Banco**: Crie um banco chamado `seguranca_digital`

### 3. Criar Arquivo `.env`

No backend, crie arquivo `.env` com:

```bash
DB_HOST=seu-host-mysql.com
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha_forte
DB_NAME=seguranca_digital

ALLOWED_ORIGINS=http://localhost:3000
```

### 4. Testar Localmente

```powershell
cd backend
python -m uvicorn server:app --reload
```

O banco criará as tabelas automaticamente! 🎉

### 5. Testar Conexão

Acesse: `http://localhost:8001/api/quiz-results/stats`

Se retornar JSON, está funcionando! ✅

---

## 🚀 Deploy

### Com MySQL, você pode usar QUALQUER plataforma:

#### **Opção 1: Render FREE ✅ (RECOMENDADO)**
- Sem disco pago necessário!
- Configurar variáveis de ambiente no Render:
  ```
  DB_HOST=seu-mysql-host.com
  DB_PORT=3306
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  DB_NAME=seguranca_digital
  ALLOWED_ORIGINS=https://seu-frontend.netlify.app
  ```

#### **Opção 2: Vercel ✅**
- Serverless functions funcionam perfeitamente com MySQL externo
- Mesmas variáveis de ambiente

#### **Opção 3: Railway ✅**
- Sem necessidade de volume
- Mesmas variáveis

---

## 📊 Acessar Dados

### Via MySQL Workbench:
1. Baixe [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
2. Conecte com suas credenciais
3. Veja tabelas: `quiz_results` e `survey_responses`
4. Faça queries, exports, etc.

### Via Código Python:
```python
import pymysql

conn = pymysql.connect(
    host='seu-host',
    user='seu-user',
    password='sua-senha',
    database='seguranca_digital'
)

cursor = conn.cursor()
cursor.execute("SELECT * FROM survey_responses")
results = cursor.fetchall()
print(results)
```

---

## 🔄 Migrar Dados Existentes (Opcional)

Se você já tem dados no SQLite local:

```python
# Script de migração (criar novo arquivo: migrate_to_mysql.py)
import sqlite3
import pymysql
import json

# Conectar SQLite
sqlite_conn = sqlite3.connect('backend/quiz_results.db')
sqlite_cursor = sqlite_conn.cursor()

# Conectar MySQL
mysql_conn = pymysql.connect(
    host='seu-host',
    user='seu-user',
    password='sua-senha',
    database='seguranca_digital'
)
mysql_cursor = mysql_conn.cursor()

# Migrar quiz_results
sqlite_cursor.execute("SELECT * FROM quiz_results")
for row in sqlite_cursor.fetchall():
    mysql_cursor.execute("""
        INSERT INTO quiz_results 
        (user_name, user_age_range, score, total_questions, test_type, answers, timestamp)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, row[1:])  # Ignora o ID

# Migrar survey_responses
sqlite_cursor.execute("SELECT * FROM survey_responses")
for row in sqlite_cursor.fetchall():
    mysql_cursor.execute("""
        INSERT INTO survey_responses 
        (nome_completo, faixa_etaria, frequencia_internet, seguranca_navegacao,
         vitima_golpe_virtual, ligacao_golpe, conhece_vitima, mensagem_suspeita,
         seguranca_banco, compartilha_senhas, criacao_senhas, atualiza_apps,
         conhece_phishing, importancia_site, timestamp)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """, row[1:])  # Ignora o ID

mysql_conn.commit()
print("✅ Migração concluída!")
```

---

## 🛠️ Próximos Passos

1. **Configure .env** com credenciais MySQL
2. **Teste localmente** (`uvicorn server:app --reload`)
3. **Suba para GitHub** (`git add . && git commit && git push`)
4. **Deploy no Render/Vercel/Railway** com variáveis de ambiente
5. **Teste online** e colete dados!

---

## 💰 Custos

- **MySQL (seu plano)**: Já tem! ✅
- **Backend (Render FREE)**: $0
- **Frontend (Netlify)**: $0
- **Total**: **GRÁTIS** 🎉

---

## ✨ Benefícios Finais

Com MySQL hospedado:
- ✅ Zero problemas com perda de dados
- ✅ Deploy em qualquer lugar (sem restrições)
- ✅ Acesso fácil para análise de dados
- ✅ Backup automático (pelo host MySQL)
- ✅ Arquitetura profissional
- ✅ Pronto para TCC e apresentação!

---

**Está tudo pronto para migrar! Basta configurar o `.env` e testar!** 🚀
