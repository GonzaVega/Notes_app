# 🗒️ App de Notas - Proyecto Virtualizado con Docker 🗒️

Este es un entorno de desarrollo virtualizado que encapsula una aplicación web de notas utilizando **Docker** y **Docker Compose**.

El sistema completo incluye:

- **Frontend:** Aplicación en React.
- **Backend:** API RESTful desarrollada en Ruby on Rails.
- **Base de datos:** PostgreSQL.
- **Orquestación:** Archivo `docker-compose.yml` que conecta y administra todos los servicios.

## 🚀 ¿Qué se logra con este proyecto?

✔️ Portabilidad total  
✔️ Aislamiento del entorno  
✔️ No se requiere instalar Node, Rails ni PostgreSQL  
✔️ Listo para levantar con un solo comando

## ▶️ ¿Donde puedo ver el video explicativo?

- [En YouTube](https://youtu.be/3oCidM88knA)

## ⚙️ Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## 🛠️ Instalación y ejecución

Cloná el repositorio y levantá los contenedores:

git clone https://github.com/GonzaVega/Notes_app.git

cd notes_app

docker compose up --build

Desde tu navegador de internet:

http://localhost:3000

Usuario de test: integrador@AYSO.com

Contraseña de prueba: password123
