const { Router } = require('express');

const router = Router();

const { storeUser } = require('../controller/usersController')
const { storeConsulta } = require('../controller/consultaController')

/**
* @swagger
* /register:
*   post:
*     summary: Registra consulta de dados
*     responses:
*        200:
*           description: Essa função registra os dados inseridos no login da usuária.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/register', storeUser);


// router.post('/loginn', storeUser);

/**
* @swagger
* /agendar:
*   post:
*     summary: Exibe e certificado o login
*     responses:
*        200:
*           description: Essa função exibe e certificado de que os dados do login estão inseridos corretamente.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/agendar', storeConsulta);

module.exports = router;