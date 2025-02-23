const express = require('express');
const routerProducts = express.Router();
const Product = require('./Models/Product');

routerProducts.get('/getProducts', async (req, res) => {
    try {
        const products = await Product.find()
        res.render('product', { products })
    } catch (error) {
        console.error(error)
    }
}),

routerProducts.post('/addProduct', async (req, res) => {
    try {
        res.send('Ajout de produit');
    } catch (error) {
        console.error(error)
    }
});

module.exports = routerProducts;