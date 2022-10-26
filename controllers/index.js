const { registro, verUsuarios, filtrarUsuarios, eliminarUsuarioPorId, eliminarUsuariosPorFiltro, actualizarUsuario, login  } = require ("./User.controller");

const {  nuevaEstanteria,
    verEstanteria,
    filtrarEstanteria,
    eliminarEsntanteriaPorId,
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
    eliminarEsntanteriaPorId,
    eliminarEstanteriaPorFiltro,
    actualizarEstanteria,
    login,
};

