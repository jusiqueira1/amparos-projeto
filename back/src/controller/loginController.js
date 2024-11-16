const connection = require('../config/db');

// async function login(request, response) {
//     const query = 'SELECT email, senha, perfil, id FROM usuarios WHERE email = ?;';
//     const params = [request.body.email];
    
//     console.log(params);
    
//     connection.query(query, params, (err, results) => {
//         console.log(err, results);

//         if (err) {
//             return response
//                 .status(500)
//                 .json({
//                     success: false,
//                     message: 'Erro ao consultar o banco de dados',
//                     error: err
//                 });
//         }

//         if (results && results.length > 0) {
//             let senhaBanco = results[0].senha;
//             let senhaFormulario = request.body.senha;

//             if (senhaBanco === senhaFormulario) {
//                 return response
//                     .status(201)
//                     .json({
//                         success: true,
//                         message: 'Sucesso',
//                         data: results[0]
//                     });
//             } else {
//                 return response
//                     .status(201)
//                     .json({
//                         success: false,
//                         message: 'Verifique sua senha',
//                     });
//             }
//         } else {
//             return response
//                 .status(201)
//                 .json({
//                     success: false,
//                     message: 'Email não encontrado',
//                     data: results
//                 });
//         }
//     });
// }


async function loginUsuaria(request, response) {
    const query = 'SELECT id, email, senha, perfil FROM usuarios WHERE email = ?;';
    const params = [request.body.email];

    console.log(params);

    connection.query(query, params, (err, results) => {
        console.log(err, results);

        if (err) {
            return response
                .status(500)
                .json({
                    success: false,
                    message: 'Erro ao consultar o banco de dados',
                    error: err
                });
        }

        if (results && results.length > 0) {
            const { senha: senhaBanco, id, perfil, email } = results[0];
            const senhaFormulario = request.body.senha;

            if (senhaBanco === senhaFormulario) {
                return response
                    .status(200)
                    .json({
                        success: true,
                        message: 'Login bem-sucedido!',
                        data: { id, perfil, email }
                    });
            } else {
                return response
                    .status(401)
                    .json({
                        success: false,
                        message: 'Senha incorreta. Verifique sua senha.'
                    });
            }
        } else {
            return response
                .status(404)
                .json({
                    success: false,
                    message: 'Email não encontrado.'
                });
        }
    });
}


async function loginProfissional(request, response) {
    const { email, password } = request.body;

    const query = "SELECT id, nome, email, especialidade, senha, perfil FROM profissionais WHERE email = ?";
    const params = [email];

    connection.query(query, params, (err, results) => {
        if (err) {
            console.error("Erro ao buscar profissional:", err);
            return response.status(500).json({ success: false, message: "Erro ao buscar profissional." });
        }

        if (results.length === 0 || results[0].senha !== password) {
            return response.status(401).json({ success: false, message: "Usuário ou senha incorretos." });
        }

        const { id, nome, especialidade, perfil } = results[0];
        response.status(200).json({
            success: true,
            message: "Login bem-sucedido!",
            data: { id, nome, especialidade, perfil }
        });
    });
}


module.exports = {
    loginUsuaria,
    loginProfissional
};