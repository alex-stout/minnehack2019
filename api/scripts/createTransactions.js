const axios = require('axios')
const crypto = require('crypto')
const faker = require('faker')
const RECORD_NUM = 300
var counter = 0

function doIt() {
    console.log(arguments)

    axios
        .post('http://localhost:9000/transaction', {
            shipmentID: Math.random(200) * 100,
            sellerID: crypto
                .createHash('md5')
                .update(Math.random().toString())
                .digest('hex')
                .toString(),
            buyerID: crypto
                .createHash('md5')
                .update(Math.random().toString())
                .digest('hex')
                .toString(),
            country: faker.address.country(),
            state: faker.address.state(),
            city: faker.address.city(),
            peroxideVal: Math.random() * 10,
            fattyAcidVal: Math.random(10) / 100,
            impurities: Math.random(25) / 100,
            bleachIndex: Math.random(5),
            weight: Math.random(10),
            timestamp: Date.now()
        })
        .then(doIt)
        .catch(console.log)
}

doIt()
