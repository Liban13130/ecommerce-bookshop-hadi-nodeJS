const express = require('express');
const routerPanier = express.Router();

routerPanier.get('/panier', async (req, res) => {
    try {
        res.send('Votre panier.')
    } catch (error) {
        console.error(error)
    }
})

module.exports = routerPanier;