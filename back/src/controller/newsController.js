// const connection = require('../config/db');
 
// async function registerNews(request, response) {
//     let params = Array(
//         request.body.title,
//         request.body.description,
//         request.file.filename,
//         request.body.link,
//         request.body.idUsuario,
//     );
//     console.log(params);
 
//     let query = "INSERT INTO noticias(title,descricao,imagem,link,id_usuario) VALUES(?,?,?,?,?);";
 
//     connection.query(query, params, (err, results) => {
//         console.log(err, results)
//         if(results) {
//             response
//                 .status(200)
//                 .json({
//                     success: true,
//                     message: "Sucesso!"
//                 })
//         } else {
//             response
//                 .status(400)
//                 .json({
//                     success: false,
//                     message: " Sem Sucesso!"
//                 })
//         }
//     })
// }
 
// async function listNews (request, response) {
//     let query = "SELECT * FROM noticias;";
 
//     connection.query(query, (err, results) => {
//         if(results) {
//             response
//                 .status(200)
//                 .json({
//                     success: true,
//                     message: "Sucesso",
//                     data: results
//                 })
//         } else {
//             response
//                 .status(400)
//                 .json({
//                     success: false
//                 })
//         }
//     })
// }
 
// module.exports = {
//     registerNews,
//     listNews
// }










const connection = require('../config/db');

// async function registerNews(request, response) {
//     const { title, description, link, idUsuario } = request.body;
//     // const file = request.file ? request.file.filename : 'fundoroxo.png';

//     if (!title || !description || !link || !idUsuario) {
//         return response.status(400).json({ success: false, message: "Preencha todos os campos obrigatórios." });
//     }

//     const query = "INSERT INTO noticias(title, descricao,  link, id_usuario) VALUES (?, ?, ?, ?);";
//     const params = [title, description, file, link, idUsuario];

//     connection.query(query, params, (err) => {
//         if (err) {
//             console.error("Erro ao cadastrar notícia:", err);
//             return response.status(500).json({ success: false, message: "Erro ao cadastrar notícia." });
//         }
//         response.status(200).json({ success: true, message: "Notícia cadastrada com sucesso!" });
//     });
// }

async function registerNews(request, response) {
    const { title, description, link, id_profissional } = request.body;
    const file = request.file ? request.file.filename : 'fundoroxo.png'; 

    if (!title || !description || !link || !id_profissional) {
        return response.status(400).json({ success: false, message: "Preencha todos os campos obrigatórios." });
    }

    const query = "INSERT INTO noticias(title, descricao, imagem, link) VALUES (?, ?, ?, ?);";
    const params = [title, description, file, link, id_profissional]; 

    connection.query(query, params, (err) => {
        if (err) {
            console.error("Erro ao cadastrar notícia:", err);
            return response.status(500).json({ success: false, message: "Erro ao cadastrar notícia." });
        }
        response.status(200).json({ success: true, message: "Notícia cadastrada com sucesso!" });
    });
} 

async function listNews(request, response) {
    const query = "SELECT * FROM noticias;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao listar notícias:", err);
            return response.status(500).json({ success: false, message: "Erro ao listar notícias." });
        }
        response.status(200).json({ success: true, data: results });
    });
}

module.exports = { registerNews, listNews };

 