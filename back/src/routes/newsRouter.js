const express = require("express");
const router = express.Router();
const upload = require('../config/multer');
 
const { registerNews, listNews} = require('../controller/newsController');
 
/**
* @swagger
* /noticias/cadastrar:
*   post:
*     summary: Cadastrar notícias
*     responses:
*        200:
*           description: Salva os dados das notícias cadastradas pelos administradores, recebendo a imagem,título,descrição e link
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/noticias/cadastrar', upload.single('file'), registerNews);

/**
* @swagger
* /noticias:
*   get:
*     summary: Exibir notícias
*     responses:
*        200:
*           description: Exibe as notícias cadastradas em formato de cards,gerando suas informações.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/noticias', listNews);
 
 
module.exports = router;