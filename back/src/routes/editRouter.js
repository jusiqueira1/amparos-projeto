const router = require("express").Router();
const upload = require('../config/multer');

const { editarPerfil, listarPerfil} = require('../controller/editController');

// router.post('/edit/perfil', upload.single('file'), editarPerfil);  

/**
* @swagger
* /edit/perfil:
*   post:
*     summary: Editar perfil
*     responses:
*        200:
*           description: Edita o perfil do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post('/edit/perfil', editarPerfil);  

/**
* @swagger
* /editperfil:
*   get:
*     summary: Editar o perfil
*     responses:
*        200:
*           description: Edita o perfil do usuário
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.get('/editperfil', listarPerfil); 


module.exports = router;
