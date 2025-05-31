# Utilizamos Node.js
FROM node:20-alpine

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la app para producción
RUN npm run build

# Usa un servidor web liviano para servir los archivos
RUN npm install -g serve

# Exponemos el puerto en el que correrá la app
EXPOSE 3000

# Comando por defecto
CMD ["serve", "-s", "build", "-l", "3000"]
