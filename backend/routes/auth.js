const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Ruta para registar usuario
router.post('/register', registerUser);

// Ruta para iniciar sesion 
router.post('/login', loginUser);



module.exports = router;