const connection = require('../config/db');
 
async function registerNews(request, response) {
    let params = Array(
        request.body.title,
        request.body.description,
        request.file.filename,
        request.body.link,
        request.body.idUsuario,
    );
    console.log(params);
 
    let query = "INSERT INTO noticias(title,descricao,imagem,link,id_usuario) VALUES(?,?,?,?,?);";
 
    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!"
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: " Sem Sucesso!"
                })
        }
    })
}
 
async function listNews (request, response) {
    let query = "SELECT * FROM noticias;";
 
    connection.query(query, (err, results) => {
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
    registerNews,
    listNews
}
 