// Importar mongoose y crypto
const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator")

//Crear esquema
const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email Inválido"],
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


UserSchema.plugin(uniqueValidator);


//Funciones del modelo

UserSchema.methods.encryptString = function (stringToEncrypt, salt) {
    return crypto
    .pbkdf2Sync(stringToEncrypt, salt, 10000, 512, "sha512")
    .toString("hex");
};


UserSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.password = this.encryptString(password, this.salt);
};

UserSchema.methods.verfyPassword = function (password) {
    return this.password === this.encryptString(password, this.salt);
}



UserSchema.methods.generateJWT = function () {
    return jwt.sign({ idUser: this._id, tipo: this.tipo }, process.env.SECRET);
};

UserSchema.methods.onSingGenerateJWT = function () {
    return {
        idUser: this._id,
        tipo: this.tipo,
        token: this.generateJWT(),
    };
};


//Exportar modelo

mongoose.model('User', UserSchema, 'coleccionUser');