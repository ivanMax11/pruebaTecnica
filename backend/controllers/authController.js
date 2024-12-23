const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validamos campos requeridos
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Se crea nuevo usuario
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente'});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'El email ya está registrado'});
        } else {
            res.status(500).json({ message: 'Error del servidor', error});
        }
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validamos campos requeridos 
        if (!email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios'});
        }

        // Busca usuario por email
        const user = await  User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificamos contraseña
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta'});
        }

        // Generamos token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesion exitoso', token});
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error});
    }
};

// Obtenemos listado de usuarios
const getUsers = async (req, res) => {
    try {
      const users = await User.find({}, 'username email');
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor', error });
    }
  };


module.exports = { registerUser, loginUser, getUsers };