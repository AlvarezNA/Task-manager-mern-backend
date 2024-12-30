# Backend - Task Manager (MERN Stack)

Este es el backend del proyecto **Task Manager**, desarrollado con **Node.js** y **Express**, como parte de una aplicación MERN (MongoDB, Express, React, Node.js).

## Características
- **Autenticación y autorización**:
  - Registro de usuarios.
  - Inicio de sesión con generación de tokens JWT.
  - Rutas protegidas mediante autenticación basada en tokens.
- **Gestión de tareas (CRUD)**:
  - Crear, leer, actualizar y eliminar tareas asociadas a un usuario.
- **Conexión a MongoDB Atlas**:
  - Base de datos remota y escalable para almacenar usuarios y tareas.

## Tecnologías utilizadas
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para la creación de API RESTful.
- **Mongoose**: Modelado de datos para MongoDB.
- **JSON Web Tokens (JWT)**: Para autenticación segura.
- **dotenv**: Manejo de variables de entorno.

## Requisitos previos
- Tener instalado [Node.js](https://nodejs.org/) (v16+ recomendado).
- Cuenta y cluster configurado en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Conexión a internet para interactuar con el cluster remoto.

## Instalación y configuración
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/AlvarezNA/Task-manager-mern-backend
   cd AlvarezNA/Task-manager-mern-backend

   Instalar las dependencias:
   npm install

   Configurar las variables de entorno: Crear un archivo .env en la raíz del proyecto y añadir las siguientes variables:

   DB_MONGO=mongodb+srv://alannata94:prueba@merntasks.rbdui.mongodb.net/?retryWrites=true&w=majority&appName=merntasks
SECRETA=palabrasecreta

Ejecutar el servidor:

En modo desarrollo:
npm run dev

En modo producción:
npm start

Probar la API:

El servidor estará disponible en: http://localhost:4000.
Endpoints disponibles:
/auth/register - Registro de usuarios.
/auth/login - Inicio de sesión.
/tasks - Gestión de tareas (CRUD).

Scripts disponibles
npm start: Inicia el servidor en modo producción.
npm run dev: Inicia el servidor con recarga automática mediante nodemon.

Documentación
Si configuraste Swagger, accede a la documentación interactiva en:

http://localhost:4000/api-docs

Estructura del proyecto
plaintext
Copiar código
/backend
├── config/
│   ├── db.js       # Conexión a MongoDB
├── controllers/
│   ├── authController.js   # Controladores para autenticación
│   ├── taskController.js   # Controladores para tareas
├── middlewares/
│   ├── authMiddleware.js   # Middleware de autenticación
├── models/
│   ├── Task.js     # Modelo de Tareas
│   ├── User.js     # Modelo de Usuarios
├── routes/
│   ├── authRoutes.js   # Rutas de autenticación
│   ├── taskRoutes.js   # Rutas de tareas
├── .env.example      # Ejemplo de configuración
├── index.js          # Archivo principal
