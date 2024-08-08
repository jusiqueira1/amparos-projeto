const connection = require('../config/db');

async function login(request, response) {
    const query = 'SELECT email, senha FROM usuarios WHERE email = ?;';

    const params = Array(
        request.body.email,
    );
    console.log(params)

    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if(results.length > 0) {
            let senhaBanco = results[0].senha;
            let senhaFormulario = request.body.senha;

            if(senhaBanco === senhaFormulario) {
                response 
                    .status(201)
                    .json({
                        success: true,
                        message: 'Sucesso',
                        data: results
                    })
            } else {
                response
                    .status(201)
                    .json({
                        success: false,
                        message: 'Verifique sua senha',
                    })
            }
        } else {
            response
                    .status(201)
                    .json({
                        success: false,
                        message: 'Email não encontrado',
                        data: results
                    })
        }
    })
}

module.exports = {
    login
}
