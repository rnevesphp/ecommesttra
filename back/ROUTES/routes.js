const express = require('express');
const crypto = require('crypto');
const pool = require('../DB-tables/dbConnection')

const router = express.Router();

const products = [
    { id: 1, name: 'Product A', category: 'eletrônicos', price: '$20' }, { id: 2, name: 'Product B', category: 'moveis', price: '$35' }, { id: 3, name: 'Product C', category: 'limpeza', price: '$18' }
]

// router get -> lista o array com todos os produtos
router.get('/', async (req, res) => {
    const { rows } = await pool.query('select * from products');
    console.log(rows);
    res.send(rows);
})


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const { rows } = await pool.query('select * from products where id = $1', [id])

    if (!product) return res.status(400).send({ error: "Produto não encontrado" })
    res.send(product)
})

// post 
router.post('/add', async (req, res) => {
    const product = req.body;

    const { rows } = await pool.query('INSERT INTO products (id, name, category, price) VALUES ($1, $2, $3, $4) RETURNING *',
        [crypto.randomUUID(), product.name, product.category, product.price]
    )

    if (!product || !product.name || !product.category || !product.price) {
        res.status(400).send('Faltam dados do produto')
        return;
    }

    res.status(201).json({
        'Produto cadastrado corretamente'
    });
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const index = products.findIndex(product => product.id == id)
    products.splice(index, 1)
    res.send('Produto excluido com sucesso');
})


router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    const editProduct = req.body;
    const index = products.findIndex(product => product.id == id)

    // ... = copia da variavel
    products[index] = {
        ...products[index],
        ...editProduct
    }

})

// exportamos as rotas
module.exports = router; 