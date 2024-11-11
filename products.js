const express = require('express');
const routerProducts = express.Router();

routerProducts.get('/getProducts', (req, res) => {
    res.send('Page produits');
}),

routerProducts.post('/addProduct', (req, res) => {
    res.send('Ajout de produit');
});

module.exports = routerProducts;