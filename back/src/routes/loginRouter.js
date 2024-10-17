const router = require('express').Router();

const { login } = require('../controller/loginController')


/**
* @swagger
* /login:
*   post:
*     summary: Fazer login
*     responses:
*        200:
*           description: Faz a consulta do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/login', login);

module.exports = router;
