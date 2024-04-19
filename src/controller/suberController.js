const connection = require('../config/db');

async function storeTask(request, response) {
    const params = Array(
        request.body.email,
        request.body.nome
    );

    const query = "INSERT INTO formulario(email) VALUES(?)"

    connection.query(query, params, (err, results) =>{
        console.log(results, err)
        if (results) {
            response
             .status(201)
             .json({
                success: true,
                message: "sucesso",
                data: results
             })
        }else{
            response
             .status(400)
             .json({
                succes: false,
                message: "nothing here but us chickens",
                query: err,
                sqlMessage: err.sqlMessage
             });
        }
    })
}

module.exports = {
    storeTask
}