const express = require('express');
const routerPanier = express.Router();

routerPanier.get('/panier', async (req, res) => {
    try {
        res.render('panier')
    } catch (error) {
        console.error(error)
    }
})

module.exports = routerPanier;