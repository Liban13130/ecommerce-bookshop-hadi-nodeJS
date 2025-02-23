const express = require('express');
const routerCheckout = express.Router();

routerCheckout.get('/checkout/paymentSuceed', async (req, res) => {
    try {
        res.send("Paiement réussi !")
    } catch (error) {
        console.error(error)
    }
});

routerCheckout.get('/checkout/paymentCanceled', async (req, res) => {
    try {
        res.send('Paiement échoué ...')
    } catch (error) {
        console.error(error)
    }
})

module.exports = routerCheckout;