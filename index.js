// Packages
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const connectMongo = require('connect-mongo');

// Routes externe
const routerCheckout = require('./checkout');
const routerPanier = require('./panier');
const routerProducts = require('./products');

// Import BD
const Product = require("./Models/Product");

// Variable d'environnement
dotenv.config();
const port = process.env.PORT;
const localhost = process.env.DB_HOST;
const databaseName = process.env.DB_NAME;
const databaseUrl = process.env.DB_URL;
const sessionSecretKey = process.env.SECRET_KEY_SESSION;

// Mise en place de la vue
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use('/', routerProducts, routerPanier, routerCheckout)
// app.use('/checkout', routerCheckout)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: sessionSecretKey,
    resave: false,
    saveUninitialized: false,
    store: connectMongo.create({ mongoUrl: databaseUrl})

}))

app.use((req, res, next) => {
    if(!req.session.cart){
        req.session.cart = [];
    }
    next();
})


app.get('/', (req, res) => {
    res.send('Bonjour Nabivol')
})


// Connexion BD et Host
app.listen(port, async () => {
    await mongoose.connect(databaseUrl)
    console.log(`Le serveur tourne sur le port ${port} et est connecté à la base de données.`);
})

// Page d'erreur
app.get('/error404', async (req, res) => {
    res.send('Page introuvable 404.')
})

app.get('/error500', async (req, res) => {
    res.send('Page introuvable 500.')
})