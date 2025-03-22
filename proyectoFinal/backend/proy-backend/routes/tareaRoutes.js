const express = require('express');
const router = express.Router();

const { obtenerTarea, crearTarea, actualizarTarea, eliminarTarea, listaTareasId } = require('../controllers/tareaController');

router.get('/tareas',obtenerTarea);
router.post('/tareas',crearTarea);
router.put('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id',eliminarTarea);


module.exports = router;