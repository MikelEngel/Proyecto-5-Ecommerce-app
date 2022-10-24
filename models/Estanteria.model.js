// Importar mongoose
const mongoose = require('mongoose');

//Crear esquema
const EstanteriaSchema = new mongoose.Schema({
    modelo: {
        type: String,
        require: true,
    },
    descripción: {
        type: String,
    },
    medidas: {
        type: String,
     
    },
    material: {
        type: String,

    },
    niveles: {
        type: String,

    },
    capacidad_carga: {
        type: String,

    },
    precio: {
        type: String,

    },
});

//Exportar modelo

mongoose.model("User", EstanteriaSchema, 'coleccionEstanteria');


