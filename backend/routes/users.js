const express = require('express');
const { getUsers } = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta para obtener el listado de usuarios (protegida con JWT)
router.get('/get', authenticateToken, getUsers);

module.exports = router;
