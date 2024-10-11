const router = require("express").Router();
const upload = require('../config/multer');

const { editarPerfil, listarPerfil} = require('../controller/editController');

// router.post('/edit/perfil', upload.single('file'), editarPerfil);  
router.post('/edit/perfil', editarPerfil);  
router.get('/editperfil', listarPerfil); 


module.exports = router;
