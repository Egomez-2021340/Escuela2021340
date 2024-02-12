const { Schema, model } = require('mongoose');

const estudianteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'nombre del estudiante obligatorio']
    },


    edad: {
        type: String,
        required: [true, 'la edad es obigatoria']
    },

    curso1: {
        type: String,
        required: [true, 'Debe estár en al menos un curso']
    },

    curso2: {
        type: String,
        
    },

    curso3: {
        type: String,
        
    },

    aprobado:{
        type: Boolean,
        default: true
    }
});