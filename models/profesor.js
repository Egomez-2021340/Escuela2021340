const { Schema, model } = require('mongoose');

const ProfesorSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },

    materia: {
        type: String,
        required: [true, 'La materia es necesaria']
    },

    
})