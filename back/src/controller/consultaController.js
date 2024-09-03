const connection = require('../config/db');
const bcrypt = require('bcrypt');

async function storeConsulta(request, response) {
    const params = [
        request.body.data_evento,
        request.body.hora_evento,  
        request.body.descricao
    ];

    const query = "INSERT INTO amparos_consulta(data_evento, hora_evento, descricao) VALUES (?, ?, ?)";
    
    connection.query(query, params, (err, results) => { 
        console.log(err, results);
        try {  
            if (results) {  
                response.status(200).json({
                    success: true,
                    message: 'Agendado com sucesso!',
                    data: results
                });
            } else { 
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não Agendado com sucesso.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

module.exports = {
    storeConsulta
}
