const router = require('express').Router();

const { login } = require('../controller/loginController')

router.post('/login', login);

module.exports = router;
