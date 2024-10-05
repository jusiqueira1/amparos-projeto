const connection = require('../config/db');

async function editarPerfil(request, response) {
    if (!request.file) {
        return response.status(400).json({ success: false, message: 'Arquivo de imagem é obrigatório.' });
    }

    let params = [
        request.body.nome,
        request.body.idade,
        request.body.email,
        request.body.cellphone,  
        request.file.filename
    ];
    console.log(params);

    let query = "INSERT INTO editperfil(nome, idade, email, cellphone, imagem) VALUES (?, ?, ?, ?, ?);";

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao inserir no banco de dados:", err);
            response.status(500).json({ success: false, message: "Erro ao inserir no banco de dados" });
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
