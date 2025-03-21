const { Usuario } = require('../models');

exports.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};

exports.crearUsuario = async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
};

exports.buscarUsuarioId = async (req, res) => {   

    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ message: 'Objeto no encontrado' });
        }
        res.json(usuario);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });

    }
};