const connection = require('../config/db');

async function editarPerfil(request, response) {
    const clienteId = request.body.cliente_id; 

    let params = [
        request.body.nome,
        request.body.email,
        clienteId 
    ];

    let query = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao atualizar no banco de dados:", err);
            return response.status(500).json({ success: false, message: "Erro ao atualizar o perfil" });
        } else {
            response.status(200).json({ success: true, message: "Perfil salvo com sucesso" });
        }
    });
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
