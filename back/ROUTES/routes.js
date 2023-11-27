const express = require('express');
// responsavel de inicializar o roteamenteo 
const router = express.Router();
const crypto = require('crypto');

const products = [
    {
        id: crypto.randomUUID(),
        name: 'Product A',
        categoria: 'eletrônicos',
        price: '$20'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product B',
        categoria: 'moveis',
        price: '$35'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product C',
        categoria: 'limpeza',
        price: '$18'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product D',
        categoria: 'roupas',
        price: '$49'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product E',
        categoria: 'cozinha',
        price: '$76'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product F',
        categoria: 'jogos',
        price: '$25'
    },
    {
        id: crypto.randomUUID(),
        name: 'Product G',
        categoria: 'esportes',
        price: '$12'
    }
]

// router get -> lista o array com todos os produtos
router.get('/', (req, res) => {
    res.send(product)
})

// exportamos as rotas
module.exports = router; 