const { Router } = require('express');

const router = Router();

const { storeUser } = require('../controller/usersController')
const { storeConsulta } = require('../controller/consultaController')

/**
* @swagger
* /register:
*   post:
*     summary: Exibir consulta
*     responses:
*        200:
*           description: Exibe a consulta feita pelo usuário
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
*     summary: Agendar consulta
*     responses:
*        200:
*           description: Agenda a consulta do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/agendar', storeConsulta);

module.exports = router;