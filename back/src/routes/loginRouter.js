const router = require('express').Router();

const { login } = require('../controller/loginController')


/**
* @swagger
* /login:
*   post:
*     summary: Fazer login
*     responses:
*        200:
*           description: Essa função se certifica de que os dados da usuária estão em sequência dos inseridos no cadastro.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/login', login);

module.exports = router;
