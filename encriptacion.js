const crypto = require('crypto');
const salt = 'abcdef';

const encriptar = (password) => {
    return crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('hex');
}

// console.log(encriptar('miContraseña'));

const contraseña = "46db278e846e51ba996b";

console.log(encriptar("miContraseña") == contraseña
    ?"Contraseña correcta":
    "Contraseña incorrecta"
);
