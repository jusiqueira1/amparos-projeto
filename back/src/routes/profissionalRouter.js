const router = require("express").Router();
const upload = require('../config/multer');
 
const { login, salvarProfissional , listProfissionais } = require('../controller/profissionaisController');
 
router.post('/salvar/profissional', upload.single('file'), salvarProfissional);
router.get('/profissionais', listProfissionais);
router.post('/login/profissional', login);
 
module.exports = router;