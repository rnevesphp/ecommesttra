'use strict'

// importamos o express para inicializar uma aplicaçao web 
const express = require('express');

// importamos as rotas da aplicacao
const productsRouter = require('./ROUTES/routes')

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.use('/products', productsRouter);

// configuramos a porta do servidor
app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send(
            console.log('Demora 5s para aparecer no corpo da resposta')
        );
    }, 5000);
})

