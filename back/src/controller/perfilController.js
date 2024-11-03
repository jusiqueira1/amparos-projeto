const connection = require('../config/db');

// async function perfil(request, response) {
//     const clienteId = request.body.id;
//     console.log("ID do cliente recebido:", clienteId);
 
//     if (!clienteId) {
//         return response.status(400).json({
//             success: false,
//             message: "ID do cliente não fornecido."
//         });
//     }

 
//     const query = "SELECT nome, email, idade FROM usuarios WHERE id = ?";
//     connection.query(query, [clienteId], (err, results) => {
//         console.log("Resultado da consulta do nome de usuario do cliente:", results);
 
//         if (err) {
//             return response.status(400).json({
//                 success: false,
//                 message: "Ops! Não deu...",
//                 query: err.sql,
//                 sqlMessage: err.sqlMessage
//             });
//         }
 
//         if (results.length === 0) {
//             return response.status(404).json({
//                 success: false,
//                 message: "Cliente não encontrado."
//             });
//         }
 
//         response.status(200).json({
//             success: true,
//             message: "Sucesso!",
//             data: results[0]
//         });
//     });
// }


// async function perfil(request, response) {
//     const clienteId = request.body.id;
//     const perfil = request.body.perfil;

//     console.log("ID do cliente recebido:", clienteId);
//     console.log("Perfil recebido:", perfil); // Para verificar se o perfil está sendo recebido corretamente

//     if (!clienteId) {
//         return response.status(400).json({
//             success: false,
//             message: "ID do cliente não fornecido."
//         });
//     }

//     let query;
//     if (perfil === 'admin') {
//         query = "SELECT nome, usuario, especialidade, email FROM profissionais WHERE id = ?"; // Adicionei o campo `email` para exibição
//     } else {
//         query = "SELECT nome, email, idade FROM usuarios WHERE id = ?";
//     }

//     connection.query(query, [clienteId], (err, results) => {
//         console.log("Resultado da consulta do perfil:", results);

//         if (err) {
//             return response.status(400).json({
//                 success: false,
//                 message: "Erro ao buscar perfil.",
//                 query: err.sql,
//                 sqlMessage: err.sqlMessage
//             });
//         }

//         if (results.length === 0) {
//             return response.status(404).json({
//                 success: false,
//                 message: "Cliente não encontrado."
//             });
//         }

//         response.status(200).json({
//             success: true,
//             message: "Sucesso!",
//             data: results[0]
//         });
//     });
// }







// Função para obter dados do perfil do profissional
async function getPerfilProfissional(request, response) {
    const clienteId = request.body.id;

    if (!clienteId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }

    const query = "SELECT nome, especialidade, email, imagem, status FROM profissionais WHERE id = ?";

    connection.query(query, [clienteId], (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao buscar perfil.",
                sqlMessage: err.sqlMessage
            });
        }

        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Profissional não encontrado."
            });
        }

        response.status(200).json({
            success: true,
            data: results[0]
        });
    });
}

// Função para obter dados do perfil da usuária
async function getPerfilUsuaria(request, response) {
    const usuariaId = request.body.id;

    if (!usuariaId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }

    const query = "SELECT nome, idade, email, status FROM usuarios WHERE id = ?";

    connection.query(query, [usuariaId], (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao buscar perfil.",
                sqlMessage: err.sqlMessage
            });
        }

        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Usuária não encontrada."
            });
        }

        response.status(200).json({
            success: true,
            data: results[0]
        });
    });
}




// async function perfil(request, response) {
//     const clienteId = request.body.id;
//     console.log("ID do cliente recebido:", clienteId);
 
//     if (!clienteId) {
//         return response.status(400).json({
//             success: false,
//             message: "ID do cliente não fornecido."
//         });
//     }

//     const query = "SELECT nome, email, idade FROM usuarios WHERE id_user = ?";
//     connection.query(query, [clienteId], (err, results) => {
//         if (err) {
//             return response.status(400).json({
//                 success: false,
//                 message: "Ops! Não deu...",
//                 query: err.sql,
//                 sqlMessage: err.sqlMessage
//             });
//         }

//         if (results.length === 0) {
//             // Se não encontrar na tabela de usuários, tenta na tabela de profissionais
//             const queryProfissional = "SELECT nome, email, especialidade FROM profissionais WHERE id = ?";
//             connection.query(queryProfissional, [clienteId], (err, resultsProf) => {
//                 if (err) {
//                     return response.status(400).json({
//                         success: false,
//                         message: "Ops! Não deu...",
//                         query: err.sql,
//                         sqlMessage: err.sqlMessage
//                     });
//                 }

//                 if (resultsProf.length === 0) {
//                     return response.status(404).json({
//                         success: false,
//                         message: "Cliente não encontrado."
//                     });
//                 }

//                 response.status(200).json({
//                     success: true,
//                     message: "Sucesso!",
//                     data: resultsProf[0]
//                 });
//             });
//         } else {
//             response.status(200).json({
//                 success: true,
//                 message: "Sucesso!",
//                 data: results[0]
//             });
//         }
//     });
// }

module.exports = {
    getPerfilProfissional,
    getPerfilUsuaria
}



// module.exports = {
//     perfil,
//     perfilProfissional
// }
