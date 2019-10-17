const products = require('../products.json');

const getProducts = (req, res) => {
    const price = products.filter(product => product.price >= Number(req.query.price));
    if (!req.query.price) {
        return res.status(200).send(products);
    } else {
        return res.status(200).send(price);
    }
}
    module.exports = getProducts;