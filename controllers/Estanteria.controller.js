const mongoose = require("mongoose");
const Estanteria = mongoose.model("Estanteria");

const nuevaEstanteria = async (req, res) => {
   try {
        if (req.user.tipo !== 'admin'){
            return res
            .status(403)
            .json({ mensaje: "Error", detalles: "Solo admin puede añadir modelos"});
        }

//Creamos nuestro usuario con lo que viene del body
    const Estanteria = new Estanteria ({...req.body, uploader: req.user.idUser});
    const resp = await Estanteria.save();


    return res.status(201).json({mensaje: "Estanteria agregada", detalles: await resp.populate("uploader", "modelo")});
   }catch (e) {
    return res.status(400).json({mensaje: "Error", detalles: e.message});
   };
   
};

const verEstanteria = async (req, res) => {
    try{
        const Estanteria = await Estanteria.find().populate("uploader","modelo");
        if(!Estanteria.length)
        return res.status(404)
        .json({mensaje: "Error", detalles: "Colección vacia"});
        return res.status(200)
        .json({mensaje: "Usuarios encontrados", detalles: Estanterias});

    }catch (e) {
        return res.status(400).json({mensaje:"Error", detalles: e.mensaje});
    }
};

const verMisEstanterias = async (req, res) => {
    try {
      if (req.user.tipo !== "admin") {
        return res.status(400).json({
          mensaje: "Error",
          detalles: "No tienes permiso para ver esto",
        });
      }
      const Estanteria = await Estanteria.find({uploader: req.user.idUser}).populate("uploader", "nombre");
      if (!Estanterias.length)
        return res
          .status(404)
          .json({ mensaje: "Error", detalles: "Esste usuario no ha creado películas" });
      return res
        .status(200)
        .json({ mensaje: "Peliculas encontradas", detalles: peliculas });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };

const eliminarEstanteriaPorId = async(req, res) => {
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
        .json ({ mensaje: "Estanteria eliminada", detalles: eliminado });
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
            ).populate("modelo");;
        return res
            .status(200)
            .json({ mensaje: "Estanteria actualizada", detalles: actualizado });

    } catch (e) {
        return res.status(400).json({ mensaje: "Error", detalles: e.mensaje });
    }
};



module.exports = {
    nuevaEstanteria,
    verEstanteria,
    eliminarEstanteriaPorId,
    actualizarEstanteria,
    verMisEstanterias,

}