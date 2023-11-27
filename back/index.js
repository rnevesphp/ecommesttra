'use strict'

const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

// configuramos a porta do servidor
app.listen(PORT, () => {
    console.log(`app rodando na porta ${PORT}`);
})

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('eaeeee meus fih');
    }, 5000);
})