const express = require('express');
const routerCheckout = express.Router();

routerCheckout.get('/checkout/paymentSuceed', (req, res) => {
    res.send("Paiement réussi !")
});

routerCheckout.get('/checkout/paymentCanceled', (req, res) => {
    res.send('Paiement échoué ...')
})

module.exports = routerCheckout;