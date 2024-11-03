const router = require("express").Router();
const upload = require('../config/multer');
 
const { salvarProfissional , listProfissionais } = require('../controller/profissionaisController');
 
/**
* @swagger
* /salvar/profissional:
*   post:
*     summary: Salvar profissional
*     responses:
*        200:
*           description: Salva os dados do cadastro da usuária profissional.
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
*           description: Exibe os dados cadastrados das profissionais.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/profissionais', listProfissionais);
 
module.exports = router;