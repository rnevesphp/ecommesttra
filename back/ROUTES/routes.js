const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { pool } = require('../DB-tables/dbConnection');

// router get -> lista o array com todos os produtos
router.get('/', async (req, res) => {
    const productDb = await pool.query('SELECT * FROM products;')
    res.json({
        message: "listagem dos produtos",
        data: productDb.rows
    })
})

// SELECT DB 
router.get('/:id', async (req, res) => {
    const id = req.params.id

    const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (rows.length === 0) return res.status(400).send({ error: "Produto não encontrado" })

    res.json({ message: "listagem de proddutos", data: rows })
})

// INSERT DB 
router.post('/add', async (req, res) => {
    const product = req.body;

    if (!product.name || !product.category || !product.price) res.status(400).send('Faltam dados do produto');

    const { rows } = await pool.query('INSERT INTO products (id , name, category, price) VALUES ( $1,$2, $3, $4 ) RETURNING *; ',
        [crypto.randomUUID(), product.name, product.category, product.price]
    );

    res.status(201).send({ message: 'Produto cadastrado corretamente', data: rows });
})

// DELETE DB -> BY ID
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const { rows } = await pool.query('DELTE * FROM products WHERE id = $id RETURNING *; ', [id])
    res.json({ message: `Produto deletado com sucesso`, data: rows })
})

// ALTER PRODUCT TABLE 
router.put('/edit/:id', async (req, res) => {
    const id = req.params.id;

    const editProduct = req.body;

    const { rows } =
        await pool.query('UPDATE products SET name = $1, category = $2, price = $3 WHERE id = $4 RETURNING * ; ',
            [editProduct.name, editProduct.category, editProduct.price, id]
        )

    res.json({ message: 'Produto alterado com sucesso', data: rows })
})

// exportamos as rotas
module.exports = router; 