# ============================================================================
# Dockerfile - Frontend (React)
# ============================================================================

FROM node:20-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia código da aplicação
COPY . .

# Expõe porta do frontend
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]
