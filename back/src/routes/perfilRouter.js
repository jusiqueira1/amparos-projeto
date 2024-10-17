const router = require('express').Router();

const { perfil } = require('../controller/perfilController')

/**
* @swagger
* /get/perfil:
*   post:
*     summary: Exibir perfil
*     responses:
*        200:
*           description: Exibe o perfil do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/get/perfil', perfil);

module.exports = router;
