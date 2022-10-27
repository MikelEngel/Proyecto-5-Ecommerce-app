const { registro, verUsuarios, filtrarUsuarios, eliminarUsuarioPorId, eliminarUsuariosPorFiltro, actualizarUsuario, login, verInfoUsuario, verInfoUsuario,
    verUsuario,  } = require ("./User.controller");

const {  nuevaEstanteria,
    verEstanteria,
    eliminarEstanteriaPorId,
    actualizarEstanteria, verMisEstanterias, } = require ("./Estanteria.controller");

module.exports = {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    nuevaEstanteria,
    verEstanteria,
    eliminarEstanteriaPorId,
    actualizarEstanteria,
    login,
    verInfoUsuario,
    nuevaVenta,
    verVentas,
    verUsuario,
    verMisEstanterias,
};

