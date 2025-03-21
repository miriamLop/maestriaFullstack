const express = require('express');
const router = express.Router();

const { obtenerClientes, crearCliente, buscarClienteId, actualizarCliente } = require('../controllers/cliente.controller');

router.get('/clientes', obtenerClientes);
router.post('/clientes', crearCliente);
//para buscar cliente por id
router.get('/clientes/:id',buscarClienteId);
router.put('/clientes/:id',actualizarCliente);

module.exports = router;