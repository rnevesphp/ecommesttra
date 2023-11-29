const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "e-commesttra",
    password: "1234",
    port: 5432
})

const teste = async () => {
    const result = await pool.query('SELECT * FROM products');
    console.log(result.rows[0]);
}

teste();

module.exports = pool; 
