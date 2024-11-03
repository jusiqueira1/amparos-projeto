// const connection = require('../config/db');

// async function salvarProfissional(request, response) {
//     let params = Array(
//         request.body.nome,
//         request.body.usuario,
//         request.body.password,
//         request.body.especialidade
//         // request.file.filename
//     );
//     console.log(params);

//     let query = "INSERT INTO profissionais(nome,usuario,senha,especialidade) VALUES(?,?,?,?);";

//     connection.query(query, params, (err, results) => {
//         console.log(err, results)
//         if(results) {
//             response
//                 .status(200)
//                 .json({
//                     success: true
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

// async function listProfissionais (request, response) {
//     let query = "SELECT * FROM profissionais;";

//     connection.query(query, (err, results) => {

//         console.log(err, results)
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

// async function login(request, response) {
//     let params = Array(
//         request.body.usuario
//     )

//     let query = "SELECT id,nome,especialidade,senha FROM profissionais WHERE usuario = ?"

//     connection.query(query, params, (err, results) => {
//         if(results) {
//             response
//                 .status(200)
//                 .json({
//                     success: true,
//                     message: "Sucesso!",
//                     data: results
//                 })
//         } else {
//             response
//                 .status(200)
//                 .json({
//                     success: true,
//                     message: "Sucesso!",
//                     data: results
//                 })
//         }
//     })
// }

// module.exports = {
//     salvarProfissional,
//     listProfissionais,
//     login
// }





const connection = require("../config/db");
async function salvarProfissional(request, response) {
    const { nome, email, password, especialidade } = request.body;
    const file = request.file ? request.file.filename : 'padrao.png'; // Use um nome padrão se nenhum arquivo for enviado

    if (!nome || !email || !file || !password || !especialidade) {
        return response.status(400).json({ success: false, message: "Preencha todos os campos." });
    }

    const query = "INSERT INTO profissionais (nome, email, imagem, senha, especialidade) VALUES (?, ?, ?, ?, ?);";
    const params = [nome, email, file, password, especialidade];

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao cadastrar profissional:", err);
            return response.status(500).json({ success: false, message: "Erro ao cadastrar profissional." });
        }
        response.status(200).json({ success: true, message: "Profissional cadastrado com sucesso!" });
    });
}



async function listProfissionais(request, response) {
    const query = "SELECT * FROM profissionais;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao listar profissionais:", err);
            return response.status(500).json({ success: false, message: "Erro ao listar profissionais." });
        }
        response.status(200).json({ success: true, message: "Profissionais listados com sucesso!", data: results });
    });
}

// async function login(request, response) {
//     const { usuario, password } = request.body;

//     const query = "SELECT id, nome, especialidade, senha FROM profissionais WHERE usuario = ?";
//     const params = [usuario];

//     connection.query(query, params, (err, results) => {
//         if (err) {
//             console.error("Erro ao buscar profissional:", err);
//             return response.status(500).json({ success: false, message: "Erro ao buscar profissional." });
//         }

//         if (results.length === 0 || results[0].senha !== password) {
//             return response.status(401).json({ success: false, message: "Usuário ou senha incorretos." });
//         }

//         const { id, nome, especialidade } = results[0];
//         response.status(200).json({ success: true, message: "Login bem-sucedido!", data: { id, nome, especialidade } });
//     });
// }




module.exports = {
    salvarProfissional,
    listProfissionais
};
