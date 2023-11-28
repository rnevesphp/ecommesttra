const express = require('express');
const crypto = require('crypto');

const router = express.Router();

const products = [
    { id: 1, name: 'Product A', category: 'eletrônicos', price: '$20' }, { id: 2, name: 'Product B', category: 'moveis', price: '$35' }, { id: 3, name: 'Product C', category: 'limpeza', price: '$18' }
]

// router get -> lista o array com todos os produtos
router.get('/', (req, res) => {
    res.send(products)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id == id);
    if (!product) return res.status(400).send({ error: "Produto não encontrado" })
    res.send(product)
})

router.post('/add', (req, res) => {
    const product = req.body;
    const newProduct = {
        "id": crypto.randomUUID(),
        ...product
    };
    if (!product || !product.name || !product.category || !product.price) res.status(400).send('Faltam dados do produto');
    products.push(newProduct);
    res.status(201).send('Produto cadastrado corretamente');
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(product => product.id == id)
    products.splice(index, 1)
    res.send('Produto excluido com sucesso');
})
// exportamos as rotas
module.exports = router; 