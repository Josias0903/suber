const app = require('./app')
// importar pacote dotenv
const dotenv = require('dotenv').config();
// definir a porta do servidor 
const PORT = process.env.PORT || 3008;


// testar servidor 
app.listen(PORT, () => console.log(`Running at port ${PORT}`))