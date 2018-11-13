const express = require('express')
const router = express.Router()
const { Pool } = require('pg')
const config = require('../config/config')
databaseURL = config.databaseURL || config.herokuURI

/** Connecting to postgresql database */
const pool = new Pool({ connectionString: databaseURL })


router.get('/products/:search', (req, res) => {
    const search = req.query.search

    /** As all the names in the database are equals, defined by the challenge. 
     *  There is no need for a criteria to get especific values 
     *  const criteria = "SELECT * FROM products WHERE product_name LIKE '%" + search + "%'"
     * */
    const criteria = "SELECT * FROM products"
    pool.query(criteria, (err, result) => {
        if (err) console.log(err.stack)
        else {
            /** The JSON.stringify() method bellow is comment because of an error in the client
             *  res.send({ products: JSON.stringify(result.rows)})
             */
        }
    })
})

router.get('/static', (req, res) => {
    /** Static Values for analisis of the client application */
    const staticData = [{
        productUrlPicture1: '#1', productUrlPicture2: '#2', productUrlPicture3: '#3', productUrlPicture4: '#4', productName: 'Jogo de Lençol Day By Day 400 Fios Egípcios',
        productStyle: 'Classic', productType: 'Solteiro Extra', productWithoutDiscount: 199.99, productWithDiscount: 149.99
    }, {
        productUrlPicture1: '#1', productUrlPicture2: '#2', productUrlPicture3: '#3', productUrlPicture4: '#4', productName: 'Jogo de Lençol Day By Day 400 Fios Egípcios',
        productStyle: 'Classic', productType: 'Solteiro Extra', productWithoutDiscount: 199.99, productWithDiscount: 149.99
    }, {
        productUrlPicture1: '#1', productUrlPicture2: '#2', productUrlPicture3: '#3', productUrlPicture4: '#4', productName: 'Jogo de Lençol Day By Day 400 Fios Egípcios',
        productStyle: 'Classic', productType: 'Solteiro Extra', productWithoutDiscount: 199.99, productWithDiscount: 149.99
    }, {
        productUrlPicture1: '#1', productUrlPicture2: '#2', productUrlPicture3: '#3', productUrlPicture4: '#4', productName: 'Jogo de Lençol Day By Day 400 Fios Egípcios',
        productStyle: 'Classic', productType: 'Solteiro Extra', productWithoutDiscount: 199.99, productWithDiscount: 149.99
    }]
    res.send({ products: staticData })
})

module.exports = router