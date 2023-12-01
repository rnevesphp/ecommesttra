const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const { pool } = require('../DB-tables/dbConnection');

// router get -> lista o array com todos os produtos
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM products;')
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no servidor");
    }
})

// SELECT DB 
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id])
        // verifico se existe o produto, se nao existir devolvo um 404 com a mensagem "Produto nao encontrado"
        if (rows.length === 0) {
            res.status(404).send('Produto nao encontrado');

        } else {
            // se encontrar o produto devolve o produto
            res.send(rows)
        }
    } catch (error) {
        console.error('Erro ao buscar o produto', error);
        res.status(500).json({
            message: 'Erro durante a busca',
            data: error
        })
    }
})

// INSERT DB 
router.post('/add', async (req, res) => {
    const product = req.body;
    if (!product.name || !product.category || !product.price) res.status(400).send('Faltam dados do produto');

    const { rows } = await pool.query('INSERT INTO products (id , name, category, price) VALUES ( $1,$2, $3, $4 ) RETURNING *; ',
        [
            crypto.randomUUID(),
            product.name,
            product.category,
            product.price
        ]
    );
    res.status(201).send(rows);
})

// DELETE DB -> BY ID
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const { rows } = await pool.query('DELETE FROM products WHERE id = $1 RETURNING * ; ', [id])
    res.json({ message: `Produto deletado com sucesso`, data: rows })
})

// ALTER PRODUCT TABLE 
router.put('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const editProduct = req.body;
    const { rows } =
        await pool.query('UPDATE products SET name = $1, category = $2, price = $3 WHERE id = $4 RETURNING * ; ',
            [
                editProduct.name,
                editProduct.category,
                editProduct.price, id
            ]
        )
    res.json({ message: 'Produto alterado com sucesso', data: rows })
})

// exportamos as rotas
module.exports = router; 