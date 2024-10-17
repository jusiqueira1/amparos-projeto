const express = require("express");
const router = express.Router();

const { criarPrompt } = require('../controller/chatController');

/**
* @swagger
* /chat:
*   post:
*     summary: Gerar chat
*     responses:
*        200:
*           description: Gera o chatbot
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   type: object
*/
router.post("/chat", criarPrompt);

module.exports = router;