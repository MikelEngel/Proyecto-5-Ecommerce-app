const mongoose = require('mongoose');
const User = mongoose.model('User');

const registro = async (req, res) => {
   try {
//Creamos nuestro usuario con lo que viene del body
    const user = new User(req.body);
    const resp = await user.save();


    return res.status(201).json({mensaje: "Usuario creado", data: resp});
   }catch (e) {
    return res.status(400).json({mensaje: "Error", detalles: e.message});
   };
   
};


const verUsuarios = async (req, res) => {
    try{
        const usuarios = await User.find();
        if(!usuarios.length)
        return res.status(404)
        .json({mensaje: "Error", detalles: "Colección vacia"});
        return res.status(200)
        .json({mensaje: "Usuarios encontrados", detalles: usuarios});

    }catch (e) {
        return res.status(400).json({mensaje:"Error", detalles: e.mensaje});
    }
};

module.exports = {
    registro,
    verUsuarios,
    //actualizarUsuario,
    //eliminarUsuario,
}