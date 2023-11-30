'use strict'

// importamos o express para inicializar uma aplicaçao web 
const express = require('express');
const cors = require('cors');

// controle de rotas
// const productsRouter = require('./ROUTES/routes copy');
const tProductsRouter = require('./ROUTES/routes');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

/* app.use('/products', productsRouter); prodcts from array or locally */
app.use('/products', tProductsRouter); /* products from database  */

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