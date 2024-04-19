// Importar pacote do express
const express = require('express');
const taskRouter = require('./routes/crudRouter');
//Instanciar o express na variavelapp
const app = express();
//Importar as rotas para serem executadas na aplicação
//const crudRouter = require('./routes/');
// Importar o pacote dotenv
const dotenv = require('dotenv').config();

const cors = require('cors');
app.use(express.json());
app.use(cors());

// Habilitar a utilização do crudRouter
app.use('/api', taskRouter);


//Setar a porta do servidor, a partir do arquivo .env
app.set('port', process.env.PORT || 3008)


//Exportar as configurações do app para outros arquivos acessarem
module.exports = app;