const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectorController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;