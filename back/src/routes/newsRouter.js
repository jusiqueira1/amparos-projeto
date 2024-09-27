const express = require("express");
const router = express.Router();
const upload = require('../config/multer');
 
const { registerNews, listNews} = require('../controller/newsController');
 
router.post('/noticias/cadastrar', upload.single('file'), registerNews);
router.get('/noticias', listNews);
 
 
module.exports = router;