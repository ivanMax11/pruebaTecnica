const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
        match: [/^\S+@\S+$/, 'El email debe tener un formato válido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligaroria'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
    }
});

module.exports = mongoose.model('User', userSchema);

