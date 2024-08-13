const router = require("express").Router();
const upload = require('../config/multer');

const { salvarMedica, listMedicas } = require('../controller/medicasController');

router.post('/salvar/medica', upload.single('file'), salvarMedica);
router.get('/medicas', listMedicas);

module.exports = router;



