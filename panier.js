const express = require('express');
const routerPanier = express.Router();

routerPanier.get('/panier', (req, res) => {
    res.send('Votre panier.')
})

module.exports = routerPanier;