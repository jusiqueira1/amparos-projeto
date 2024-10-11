const connection = require('../config/db');

async function perfil(request, response) {
    const clienteId = request.body.id;
    console.log("ID do cliente recebido:", clienteId);
 
    if (!clienteId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }

 
    const query = "SELECT nome, email FROM usuarios WHERE id = ?";
    connection.query(query, [clienteId], (err, results) => {
        console.log("Resultado da consulta do nome de usuario do cliente:", results);
 
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
 
        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Cliente não encontrado."
            });
        }
 
        response.status(200).json({
            success: true,
            message: "Sucesso!",
            data: results[0]
        });
    });
}

async function perfilUpdate(request, response) {
    const clienteId = request.body.id;
    console.log("ID do cliente recebido:", clienteId);
 
    if (!clienteId) {
        return response.status(400).json({
            success: false,
            message: "ID do cliente não fornecido."
        });
    }

 
    const query = "UPDATE nome, email FROM usuarios WHERE id = ?";
    connection.query(query, [clienteId], (err, results) => {
        console.log("Resultado da consulta do nome de usuario do cliente:", results);
 
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Ops! Não deu...",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
        }
 
        if (results.length === 0) {
            return response.status(404).json({
                success: false,
                message: "Cliente não encontrado."
            });
        }
 
        response.status(200).json({
            success: true,
            message: "Sucesso!",
            data: results[0]
        });
    });
}

module.exports = {
    perfil
}
