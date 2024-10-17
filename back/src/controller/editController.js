const connection = require('../config/db');

 
async function editarPerfil(req, res) {
    try {
        const clienteId = req.body.cliente_id;
        const nome = req.body.nome;
        const email = req.body.email;

        if (!clienteId || !nome || !email) {
            return res.status(400).json({
                success: false,
                message: "ID do cliente, nome e email são obrigatórios."
            });
        }

        const query = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?";
        connection.query(query, [nome, email, clienteId], (err, results) => {
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
                data: { nome, email }
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

 


async function listarPerfil(request, response) {
    let query = "SELECT * FROM editperfil;";

    connection.query(query, (err, results) => {
        console.log(err, results);
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false
            });
        }
    });
}

module.exports = {
    editarPerfil,
    listarPerfil
};
