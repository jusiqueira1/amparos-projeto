const router = require("express").Router();
const upload = require('../config/multer');

const { editarPerfil} = require('../controller/editController');

// router.post('/edit/perfil', upload.single('file'), editarPerfil);  

/**
* @swagger
* /edit/perfil:
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
router.post('/edit/perfil', editarPerfil);  


module.exports = router;
