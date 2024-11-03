const router = require('express').Router();

const { loginUsuaria, loginProfissional } = require('../controller/loginController')


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
router.post('/login', loginUsuaria);

/**
* @swagger
* /login/profissional:
*   post:
*     summary: Login da profissional
*     responses:
*        200:
*           description: Essa função cuida da certificação das informações inseridas no cadastro das profissionais e verifica se estão condizentes.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/login/profissional', loginProfissional);

module.exports = router;
