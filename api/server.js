const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const utilityRoutes = require('./routes/utility')

mongoose
    .connect('mongodb://localhost:27017/minnehack', {
        user: 'prototype',
        pass: 'password123',
        useNewUrlParser: true
    })
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

app.listen(9000, () => {
    console.log('API listening on port 9000')
})
