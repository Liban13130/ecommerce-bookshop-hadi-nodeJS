const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Création Schéma Model MongoDB
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;