const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const utilityRoutes = require('./routes/utility')
const certificationRoutes = require('./routes/certification')

mongoose
    .connect(
        'mongodb://ec2-52-15-253-69.us-east-2.compute.amazonaws.com/minnehack',
        {
            user: 'prototype',
            pass: 'password123',
            useNewUrlParser: true
        }
    )
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log(err)
    })

const app = express()

app.use(cors())

app.use(morgan('tiny'))

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

utilityRoutes(app)
certificationRoutes(app)

app.use('/', (req, res) => {
    res.status(200).send({ message: 'Welcome' })
})

app.listen(9000, () => {
    console.log('API listening on port 9000')
})
