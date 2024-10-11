const router = require('express').Router();

const { perfil } = require('../controller/perfilController')

router.post('/get/perfil', perfil);

module.exports = router;
