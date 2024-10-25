const connection = require('../config/db');

async function editarPerfil(req, res) {
    try {
        const clienteId = req.body.cliente_id;
        const nome = req.body.nome;
        const idade = req.body.idade;
        const email = req.body.email;

        if (!clienteId || !nome || !idade || !email) {
            return res.status(400).json({
                success: false,
                message: "ID do cliente, nome e email são obrigatórios."
            });
        }

        const query = "UPDATE usuarios SET nome = ?, idade = ?, email = ? WHERE id = ?";
        connection.query(query, [nome,idade, email, clienteId], (err, results) => {
            if (err) {
                console.error('Erro ao atualizar perfil:', err);
                return res.status(500).json({
                    success: false,
                    message: "Erro ao atualizar perfil.",
                    error: err.message
                });
            }

            res.status(200).json({
                success: true,
                message: "Perfil atualizado com sucesso!",
                data: { nome, email, idade }
            });
        });
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        res.status(500).json({
            success: false,
            message: "Erro interno do servidor.",
            error: error.message
        });
    }
}

module.exports = {
    editarPerfil
};
