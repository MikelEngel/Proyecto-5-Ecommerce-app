const mongoose = require('mongoose');
const { Estanteria, Estanteria, Estanteria } = require('../models');
const Estanteria = mongoose.model('Estanteria');

const nuevaEstanteria = async (req, res) => {
   try {
//Creamos nuestro usuario con lo que viene del body
    const Estanteria = new Estanteria(req.body);
    const resp = await Estanteria.save();


    return res.status(201).json({mensaje: "Estanteria agregada", data: resp});
   }catch (e) {
    return res.status(400).json({mensaje: "Error", detalles: e.message});
   };
   
};


const verEstanteria = async (req, res) => {
    try{
        const usuarios = await Estanteria.find();
        if(!Estanteria.length)
        return res.status(404)
        .json({mensaje: "Error", detalles: "Colección vacia"});
        return res.status(200)
        .json({mensaje: "Usuarios encontrados", detalles: Estanterias});

    }catch (e) {
        return res.status(400).json({mensaje:"Error", detalles: e.mensaje});
    }
};


const filtrarEstanteria = async (req, res) => {
    try {
        const Estanteria = await Estanteria.find(req.body);
        if (!Estanteria.length)
        return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Usuarios no encontrados" });
        return res
        .status (200)
        .json({ mensaje: "Usuarios encontrados", detalles: Estanteria });
    } catch (e) {
        return res.status(400).json({ mensaje: "Error", detalles: e.mensaje });
    }
};



const eliminarEsntanteriaPorId = async(req, res) => {
    try {
        const { id } = req.params;
        if (id.length !== 24)
        return res
        .status(400)
        .json({ mensaje: "Error", detalles: "ID no valido" });
        const Estanteria = await Estanteria.findById(id);
        if(!Estanteria)
        return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Esntantería no encontrada" });
        const eliminado = await Estanteria.findByIdAndDelete(id);
        return res
        .status(200)
        .json ({ mensaje: "Estanteria eliminada", detalles: eliminado })
    }catch(e){
        return res.status(400).json({ mensaje: "Error", detalles: e.mensaje });
    }
};


const eliminarEstanteriaPorFiltro = async (req, res) => {
    
    try {
        const eliminados = await Estanteria.deleteMany(req.body);
        return res
        .status(200)
        .json({ mensaje: "Error", detalles: "Estantería no encontrada" });
        const eliminado = await User.findByIdAndDelete(id);
        return res
        .status(200)
        .json ({ mensaje: "Usuarios eliminados", detalles: eliminados });
    }catch(e){
        return res.status(400).json({ mensaje: "Error", detalles: e.mensaje });
    }
};

const actualizarEstanteria = async (req, res) => {
    try {
        const { id } = req.params;

        const actualizo = await Estanteria.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
            );
        return res
            .status(200)
            .json({ mensaje: "Estanteria actualizada", detalles: actualizado });

    } catch (e) {
        return res.status(400).json({ mensaje: "Error", detalles: e.mensaje });
    }
}



module.exports = {
    nuevaEstanteria,
    verEstanteria,
    filtrarEstanteria,
    eliminarEsntanteriaPorId,
    eliminarEstanteriaPorFiltro,
    actualizarEstanteria,

}