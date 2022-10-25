const jwt = require('jsonwebtoken');
const secret = 'mysecret';

const generarToken = (payload) => {
    return jwt.sign(
        payload,
        secret
    );
}


const verificarToken =(token) => {
    return jwt.verify(token);
}


console.log (generarToken({
    userType: 'admin',
    userId: '5'
}))

