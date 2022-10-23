// Importar express
const express = require('express');

//Instanciar enrutador
const router = express.Router();

//Importar controladores
const {
    registro,
    verUsuarios,
} = require ('../controllers');

//Declaración de las rutas
router.post('/',registro);
router.get('/getAll', verUsuarios);

//Exportamos enrutador
module.exports = router;