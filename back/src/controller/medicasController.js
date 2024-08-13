const connection = require('../config/db');

async function salvarMedica(request, response) {
    let params = Array(
        request.body.nome,
        request.body.especialidade,
        request.file.filename
    );
    console.log(params);

    let query = "INSERT INTO medicas(nome,especialidade,imagem) VALUES(?,?,?);";

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

async function listMedicas (request, response) {
    let query = "SELECT * FROM medicas;";

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
    salvarMedica,
    listMedicas
}