const { Schema, model } = require('mongoose');

const userSchema = Schema({
    nombreUsuario: {
        type: String,
        required: [true, 'Debe tener un nombre de usuario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'te falla?']
    },
    role:{
        type: String,
        required: [true, 'El role es obligatorio']
    }
})