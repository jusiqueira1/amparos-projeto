
const connection = require('../config/db');

const bcrypt = require('bcrypt');

async function storeUser(request, response) {
    const query = 'INSERT INTO usuarios(nome, email, idade, senha) VALUES(?,?,?,?)';

    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.idade,
        request.body.senha
    );

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    storeUser

}