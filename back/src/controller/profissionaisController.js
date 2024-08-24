const connection = require('../config/db');

async function salvarProfissional(request, response) {
    let params = Array(
        request.body.nome,
        request.body.especialidade,
        request.file.filename
    );
    console.log(params);

    let query = "INSERT INTO profissionais(nome,especialidade,imagem) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true
                })
        } else {
            response
                .status(400)
                .json({
                    success: false
                })
        }
    })
}

async function listProfissionais (request, response) {
    let query = "SELECT * FROM profissionais;";

    connection.query(query, (err, results) => {

        console.log(err, results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false
                })
        }
    })
}

module.exports = {
    salvarProfissional,
    listProfissionais
}