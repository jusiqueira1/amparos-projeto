const express = require("express");
const router = express.Router();

const { criarPrompt } = require('../controller/chatController');

/**
* @swagger
* /chat:
*   post:
*     summary: Gerar Chatbot
*     responses:
*        200:
*           description: Essa função traz a funcionalidade do Chatbot para a página, permitindo sua exibição também.
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post("/chat", criarPrompt);

module.exports = router;