const express = require('express');
const routerCheckout = express.Router();

routerCheckout.get('/paymentSuceed', (req, res) => {
    res.send("Paiement réussi !")
});

routerCheckout.get('/paymentCanceled', (req, res) => {
    res.send('Paiement échoué ...')
})

module.exports = routerCheckout;