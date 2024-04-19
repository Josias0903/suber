// Importar pacote do express
const { Router } = require('express');

// Instanciar o Router na na variavel router
const router = Router();


// Importar funções do controller para a rota acessar as funções
const {storeTask} = require('../controller/suberController');

// router.get('/listar', listarDados);

router.post('/store/suber',storeTask);

// router.put('/atualizar/:id', atualizarDados);

// router.delete('/deletar/:id', deletarDados);

module.exports = router;