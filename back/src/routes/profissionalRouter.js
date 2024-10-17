const router = require("express").Router();
const upload = require('../config/multer');
 
const { login, salvarProfissional , listProfissionais } = require('../controller/profissionaisController');
 
/**
* @swagger
* /salvar/profissional:
*   post:
*     summary: Salvar profissional
*     responses:
*        200:
*           description: Salva o perfil do usuário profissional
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/salvar/profissional', upload.single('file'), salvarProfissional);

/**
* @swagger
* /profissionais:
*   get:
*     summary: Exibir profissional
*     responses:
*        200:
*           description: Exibe o perfil do usuário profissional
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/profissionais', listProfissionais);

/**
* @swagger
* /login/profissional:
*   post:
*     summary: Login da profissional
*     responses:
*        200:
*           description: Faz o login do usuário profissional
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/login/profissional', login);
 
module.exports = router;