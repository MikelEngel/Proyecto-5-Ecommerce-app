const jwt = require('jsonwebtoken');
const secret = 'micadenasecretadeusoprivado';

const generarToken = (payload) => {
    return jwt.sign(
        payload,
        secret
    );
}


const verificarToken =(token) => {
    return jwt.verify(token,secret);
}


console.log (generarToken({
    userType: 'admin',
    userId: '5'
}))

