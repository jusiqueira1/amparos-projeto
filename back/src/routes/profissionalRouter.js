const router = require("express").Router();
const upload = require('../config/multer');
 
const { salvarProfissional , listProfissionais } = require('../controller/profissionaisController');
 
router.post('/salvar/profissional', upload.single('file'), salvarProfissional);
router.get('/profissionais', listProfissionais);
 
module.exports = router;