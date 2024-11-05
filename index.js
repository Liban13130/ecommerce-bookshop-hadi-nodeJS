// Packages
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Variable d'environnement
dotenv.config();
const port = process.env.PORT;
const localhost = process.env.DB_HOST;
const databaseName = process.env.DB_NAME;
const databaseUrl = process.env.DB_URL

app.get('/', (req, res) => {
    res.send('Bonjour')
})



// Connexion BD et Host
app.listen(port, async () => {
    await mongoose.connect(databaseUrl)
    console.log(`Le serveur tourne sur le port ${port} et est connecté à la base de données.`);
})