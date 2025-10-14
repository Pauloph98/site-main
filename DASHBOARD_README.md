# 📊 Sistema de Métricas do Quiz - Dashboard

## 🎯 Objetivo

Este sistema coleta e analisa os resultados dos quizzes (pré-teste e pós-teste) para medir a efetividade do conteúdo educativo sobre segurança digital.

## 🗄️ Banco de Dados

Os dados são salvos em **SQLite3** (`backend/quiz_results.db`) com a seguinte estrutura:

### Tabela: `quiz_results`
- `id`: ID único do registro
- `user_name`: Nome do usuário
- `user_age_range`: Faixa etária (ex: "60-69", "70-79")
- `score`: Pontuação obtida
- `total_questions`: Total de questões
- `test_type`: Tipo do teste ("pre-teste" ou "pos-teste")
- `answers`: JSON com todas as respostas
- `timestamp`: Data e hora do teste

## 📈 Métricas Coletadas

### 1. Estatísticas Gerais
- Total de usuários que fizeram os testes
- Média de acertos no pré-teste (%)
- Média de acertos no pós-teste (%)
- Melhoria entre pré e pós-teste

### 2. Análise por Faixa Etária
- Desempenho de cada faixa etária
- Comparação pré vs pós-teste por idade

### 3. Análise por Questão
- Taxa de acerto de cada questão
- Comparação entre pré e pós-teste para cada questão
- Identificação de questões mais difíceis

## 🚀 Como Usar

### 1. Iniciar o Backend

```bash
cd backend
python -m uvicorn server:app --reload --port 8000
```

O backend será iniciado em `http://localhost:8000`

### 2. Iniciar o Frontend

```bash
cd frontend
npm start
```

O frontend será iniciado em `http://localhost:3000`

### 3. Acessar o Dashboard

O dashboard **NÃO** aparece no menu de navegação. Para acessá-lo, digite diretamente no navegador:

```
http://localhost:3000/dashboard
```

ou pelo IP da sua máquina:

```
http://192.168.15.4:3000/dashboard
```

## 📊 Visualizações do Dashboard

### Gráficos Disponíveis:

1. **Cards de Resumo**
   - Total de usuários
   - Média do pré-teste
   - Média do pós-teste
   - Percentual de melhoria

2. **Gráfico de Comparação Principal**
   - Barra comparando pré-teste vs pós-teste
   - Indicador visual de melhoria

3. **Gráfico por Faixa Etária**
   - Barras agrupadas mostrando desempenho de cada faixa etária
   - Comparação pré vs pós para cada grupo

4. **Análise Individual por Questão**
   - Barras de progresso para cada questão
   - Taxa de acerto antes e depois do conteúdo

## 🔧 API Endpoints

### Salvar Resultado do Quiz
```
POST /api/quiz-results
```

**Body:**
```json
{
  "user_name": "João Silva",
  "user_age_range": "60-69",
  "score": 15,
  "total_questions": 20,
  "test_type": "pre-teste",
  "answers": [
    {
      "questionId": 1,
      "selectedOption": "a",
      "isCorrect": true
    }
  ]
}
```

### Buscar Estatísticas
```
GET /api/quiz-results/stats
```

**Resposta:**
```json
{
  "pre_test": {
    "total_users": 50,
    "avg_score": 12.5,
    "avg_percentage": 62.5
  },
  "post_test": {
    "total_users": 45,
    "avg_score": 17.2,
    "avg_percentage": 86.0
  },
  "age_range_stats": [...],
  "question_stats": {...}
}
```

## 💡 Recursos

- ✅ Coleta automática de dados ao completar quizzes
- ✅ Armazenamento local em SQLite (não precisa de servidor externo)
- ✅ Dashboard com gráficos interativos
- ✅ Análise por faixa etária
- ✅ Análise individual de cada questão
- ✅ Indicador de melhoria após conteúdo educativo
- ✅ Interface responsiva

## 🎨 Tecnologias

- **Backend**: FastAPI + SQLite3
- **Frontend**: React + Recharts (gráficos)
- **Componentes**: shadcn/ui + Tailwind CSS

## 📝 Notas

- O banco de dados SQLite é criado automaticamente no primeiro uso
- Os dados são persistidos localmente no arquivo `backend/quiz_results.db`
- O dashboard é acessível apenas por URL direta (não aparece no menu)
- Recomenda-se fazer backup regular do arquivo `.db`

## 🔒 Segurança

Para ambiente de produção, considere:
- Adicionar autenticação para acesso ao dashboard
- Implementar HTTPS
- Configurar CORS adequadamente
- Fazer backup automático do banco de dados
