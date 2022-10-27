//! 1. Importar express

const express = require('express');
const auth = require("../middleware/auth");

//! 2. Instanciar enrutador

const router = express.Router();

//! 3. Importar controladores

const {
    nuevaEstanteria,
    verEstanteria,
    eliminarEstanteriaPorId,
    actualizarEstanteria,
    
} = require ("../controllers");

//! 4. Declaramos rutas

router.post("/", auth, nuevaEstanteria);
router.get("/getAll", auth, verEstanteria);
router.delete("/:id", auth, eliminarEstanteriaPorId);
router.put("/:id", auth, actualizarEstanteria);



//! 5. Exportamos el enrutador

module.exports = router;