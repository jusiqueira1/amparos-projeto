const connection = require('../config/db');

async function editarPerfilUsuaria(req, res) {
    try {
        const { id_usuaria: usuariaId, nome, idade, email } = req.body;

        if (!usuariaId || !nome || !email) {
            return res.status(400).json({
                success: false,
                message: "ID da usuária, nome e email são obrigatórios."
            });
        }

        const query = "UPDATE usuarios SET nome = ?, idade = ?, email = ? WHERE id = ?";
        connection.query(query, [nome, idade, email, usuariaId], (err, results) => {
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


async function editarPerfilProfissional(req, res) {
    try {
        const { id_profissional: profissionalId, nome, especialidade, email } = req.body;

        if (!profissionalId || !nome || !email) {
            return res.status(400).json({
                success: false,
                message: "ID da profissional, nome e email são obrigatórios."
            });
        }

        const query = "UPDATE profissionais SET nome = ?, especialidade = ?, email = ? WHERE id = ?";
        connection.query(query, [nome, especialidade, email, profissionalId], (err, results) => {
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
                data: { nome, especialidade, email }
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

// async function editarPerfil(req, res) {
//     try {
//         const idUser = req.body.idUser;
//         const nome = req.body.nome;
//         const email = req.body.email;
       
 
//         if (!idUser || !nome || !email) {
//             return res.status(400).json({
//                 success: false,
//                 message: "ID do cliente, nome e email são obrigatórios."
//             });
//         }
 
//         const query = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?";
//         connection.query(query, [nome, email, idUser], (err, results) => {
//             if (err) {
//                 console.error('Erro ao atualizar perfil:', err);
//                 return res.status(500).json({
//                     success: false,
//                     message: "Erro ao atualizar perfil.",
//                     error: err.message
//                 });
//             }
 
//             res.status(200).json({
//                 success: true,
//                 message: "Perfil atualizado com sucesso!",
//                 data: { nome, email }
//             });
//         });
//     } catch (error) {
//         console.error('Erro ao processar a solicitação:', error);
//         res.status(500).json({
//             success: false,
//             message: "Erro interno do servidor.",
//             error: error.message
//         });
//     }
// }
 
// module.exports = {
//     editarPerfil
// };

module.exports = {
    editarPerfilUsuaria,
    editarPerfilProfissional
};
