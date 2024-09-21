const express = require("express");
const router = express.Router();

const { testDisplayNews,  pegarNoticia} = require('../controller/newsController');

router.post("/news", testDisplayNews);

router.get('/dados', pegarNoticia);



module.exports = router;



