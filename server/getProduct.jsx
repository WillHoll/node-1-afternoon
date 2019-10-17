const products = require('../products.json');


const getProduct = (req, res, next) => {
    const id = parseInt(req.params.id)
    const foundProduct = products.filter(productObj => productObj.id === id)
    if (foundProduct.length === 0) {
        return res.status(500).send('Item not in List')
    } else {
        res.status(200).send(foundProduct)
    }
}

module.exports = getProduct;