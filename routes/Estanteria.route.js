//! 1. Importar express

const express = require('express');

//! 2. Instanciar enrutador

const router = express.Router();

//! 3. Importar controladores

const {
    nuevaEstanteria,
    verEstanteria,
    filtrarEstanteria,
    eliminarEsntanteriaPorId,
    eliminarEstanteriaPorFiltro,
    actualizarEstanteria,
    
} = require ('../controllers');

//! 4. Declaramos rutas

router.post('/', nuevaEstanteria);
router.get('/getAll', verEstanteria);
router.get("/filtrar", filtrarEstanteria);
router.delete("/:id", eliminarEsntanteriaPorId);
router.delete("/", eliminarEstanteriaPorFiltro);
router.put("/:id", actualizarEstanteria);



//! 5. Exportamos el enrutador

module.exports = router;