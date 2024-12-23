API RESTful - Gestión de Usuario

Tabla de Contenidos
Introducción
Características
Instalación
Variables de Entorno
Endpoints de la API
Dependencias
Estructura del Proyecto
Contribuciones

Introducción
Esta API RESTful permite gestionar usuarios mediante operaciones de registro, inicio de sesión y obtención de una lista de usuarios autenticados. Está desarrollada con Node.js, Express y MongoDB.
El proyecto sigue una arquitectura modular para facilitar la escalabilidad y el mantenimiento.

Características
Registro de usuarios: Permite registrar nuevos usuarios con un correo electrónico y una contraseña.
Autenticación con JWT: Los usuarios pueden iniciar sesión y recibir un token JWT para acceder a los endpoints protegidos.
Obtención de usuarios autenticados: Lista de usuarios disponible únicamente para usuarios autenticados.
Manejo de errores: Validación de datos y manejo básico de errores en las solicitudes.
Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

Clonar el repositorio

bash
Copy code
git clone https://github.com/tu_usuario/tu_repositorio.git
Entrar al directorio del proyecto

bash
Copy code
cd tu_repositorio
Instalar las dependencias

bash
Copy code
npm install
Configurar las variables de entorno
Crea un archivo .env en la raíz del proyecto con los valores indicados en la sección Variables de Entorno.

Iniciar el servidor

bash
node server.js
 
La API estará disponible en http://localhost:<PUERTO> (por defecto en el puerto 3000 si no se especifica en las variables de entorno).
Utiliza herramientas como Postman o cURL para probar los endpoints descritos en la sección Endpoints de la API.

Variables de Entorno
El proyecto requiere un archivo .env configurado con las siguientes variables:


MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<base_de_datos>
JWT_SECRET=<clave_secreta_para_jwt>
PORT=3000
MONGO_URI: URL de conexión a MongoDB.
JWT_SECRET: Clave secreta para firmar los tokens JWT.
PORT: Puerto en el que se ejecutará la aplicación (opcional).
Endpoints de la API
Autenticación
Registrar usuario


Estructura de proyecto
.
├── config/
│   └── db.js             # Conexión a la base de datos
├── controllers/
│   └── authController.js # Lógica de autenticación y usuarios
├── middlewares/
│   └── authMiddleware.js # Middleware de autenticación
├── models/
│   └── User.js           # Modelo de usuario
├── routes/
│   ├── auth.js           # Rutas de autenticación
│   ├── users.js          # Rutas de usuarios
│   └── index.js          # Archivo central para rutas
├── .env                  # Variables de entorno (no incluido en el repositorio)
├── .gitignore            # Archivos ignorados en Git
├── server.js             # Punto de entrada del servidor
└── package.json          # Configuración del proyecto
