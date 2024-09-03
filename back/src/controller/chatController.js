const connection = require('../config/db');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.CHAVE_GEMINI);
async function criarPrompt(request, response) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = request.body.prompt;

        if (!prompt) {
            return response.status(400).json({
                success: false,
                message: "Prompt não fornecido."
            });
        }

        const result = await model.generateContent(prompt);
        const text = result.response.text(); 

        if (text) {
            response.status(201).json({
                success: true,
                message: "Sucesso!",
                data: text
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Ops! Não deu..."
            });
        }
    } catch (error) {
        console.error("Erro ao gerar conteúdo:", error);
        response.status(500).json({
            success: false,
            message: "Erro interno do servidor.",
            error: error.message
        });
    }
}


module.exports = {
    criarPrompt
};

