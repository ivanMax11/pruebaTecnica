const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Verifica si el encabezado Authorization está presente
    const token = req.headers.authorization?.split(' ')[1];  // Extrae el token (después de "Bearer")

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });
    }

    try {
        // Verifica si el token es válido
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  
        next();  
    } catch (error) {
        return res.status(403).json({ message: 'Token no válido o expirado' });
    }
};

module.exports = authenticateToken;
