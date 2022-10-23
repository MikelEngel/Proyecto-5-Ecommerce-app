// Importar mongoose
const mongoose = require('mongoose');

//Crear esquema
const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    empresa: {
        type: String,
        default: 'VyA'
    },
    edad: {
        type: Number,
        min: [18, 'Tienes que ser mayor de edad'],
        max: [100, 'Superaste el rango de edad']
    },
    tipo: {
        type: String,
        enum: [
        'cliente',
        'admin',
        'almacen',
        'oficina',
        ]
    },
    default:'cliente'
});

//Exportar modelo

mongoose.model("User", UserSchema, "coleccionUser");