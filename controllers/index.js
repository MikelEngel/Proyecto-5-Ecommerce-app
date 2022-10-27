const { registro, verUsuarios, filtrarUsuarios, eliminarUsuarioPorId, eliminarUsuariosPorFiltro, actualizarUsuario, login  } = require ("./User.controller");

const {  nuevaEstanteria,
    verEstanteria,
    filtrarEstanteria,
    eliminarEstanteriaPorId,
    eliminarEstanteriaPorFiltro,
    actualizarEstanteria, } = require ("./Estanteria.controller");

module.exports = {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    nuevaEstanteria,
    verEstanteria,
    filtrarEstanteria,
    eliminarEstanteriaPorId,
    eliminarEstanteriaPorFiltro,
    actualizarEstanteria,
    login,
};

