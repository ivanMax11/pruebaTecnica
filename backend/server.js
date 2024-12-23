const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes'); 
const connectDB = require('./config/db');

dotenv.config(); // Cargar variables de entorno desde .env

// Conecta a la DB
connectDB();

// Crear la aplicación
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Configuración de rutas centralizadas
app.use('/api', routes);

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
