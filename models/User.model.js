// Importar mongoose
const mongoose = require('mongoose');
const crypto = require('crypto');

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
        ],
        default:'cliente'
    },
    password: {
        type:String,
    },
    salt: {
        type:String,
    }
});


//Funciones del modelo
UserSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.password = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};


//Exportar modelo

mongoose.model('User', UserSchema, 'coleccionUser');