//! 1. Importar express & middleware

const express = require('express');
const auth = require("../middleware/auth");

//! 2. Instanciar enrutador

const router = express.Router();

//! 3. Importar controladores

const {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    login,
    
} = require ('../controllers');

//! 4. Declaramos rutas

router.post('/', registro);
router.post('/login', login);
router.get('/getAll', auth, verUsuarios);
router.get("/filtrar", auth, filtrarUsuarios);
router.delete("/:id", auth, eliminarUsuarioPorId);
router.delete("/", auth, eliminarUsuariosPorFiltro);
router.put("/:id", auth, actualizarUsuario);



//! 5. Exportamos el enrutador

module.exports = router;