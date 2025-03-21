const express = require('express');
const router = express.Router();

const { obtenerUsuarios, crearUsuario, buscarUsuarioId } = require('../controllers/usuario.controller');


router.get('/usuarios', obtenerUsuarios);
router.post('/usuarios', crearUsuario);
router.get('/usuarios/:id',buscarUsuarioId);


module.exports = router;