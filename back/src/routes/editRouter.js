const router = require("express").Router();
const upload = require('../config/multer');

const { editarPerfilUsuaria, editarPerfilProfissional } = require('../controller/editController');

// router.post('/edit/perfil', upload.single('file'), editarPerfil);  

/**
* @swagger
* /edit/perfil/usuaria:
*   post:
*     summary: Editar perfil
*     responses:
*        200:
*           description: Essa função edita os dados inseridos da usuária, modificando se ela preferir.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.put('/edit/perfil/usuaria', editarPerfilUsuaria);  

/**
* @swagger
* /edit/perfil/profissional:
*   post:
*     summary: Editar perfil
*     responses:
*        200:
*           description: Essa função edita os dados inseridos da profissional, modificando se ela preferir.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.put('/edit/perfil/profissional', editarPerfilProfissional);  


module.exports = router;
