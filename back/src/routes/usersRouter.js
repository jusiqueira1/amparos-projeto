const { Router } = require('express');

const router = Router();

const { storeUser } = require('../controller/usersController')
const { storeConsulta } = require('../controller/consultaController')

router.post('/register', storeUser);
router.post('/login', storeUser);
router.post('/agendar', storeConsulta);

module.exports = router;