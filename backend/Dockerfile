# ============================================================================
# Dockerfile - Backend (FastAPI)
# ============================================================================

FROM python:3.11-slim

# Define diretório de trabalho
WORKDIR /app

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Copia requirements
COPY requirements.txt .

# Instala dependências Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia código da aplicação
COPY . .

# Expõe porta do backend
EXPOSE 8001

# Comando para iniciar o servidor
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]
