const express = require('express');
const authRoutes = require('./auth');
const userRoutes = require('./users');

const router = express.Router();

// Rutas para autenticar
router.use('/auth', authRoutes);

// Rutas para el usuario 
router.use('/users', userRoutes);

module.exports = router;
