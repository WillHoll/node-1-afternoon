const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts.jsx');
const getProduct = require('./getProduct.jsx');
const app = express();
const port = 3001;



app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);



app.listen(port, () => console.log(`listening on port ${port}`));