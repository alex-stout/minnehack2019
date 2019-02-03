let mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

//Transaction Schema
let transactionSchema = mongoose.Schema({
    shipmentID: {
        type: Number,
        required: true,
        select: true
    },
    sellerID: {
        type: String,
        required: true,
        select: true
    },
    buyerID: {
        type: String,
        required: true,
        select: true
    },
    country: {
        type: String,
        required: true,
        select: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    peroxideVal: {
        type: Number,
        required: true
    },
    fattyAcidVal: {
        type: Number,
        required: true
    },
    impurities: {
        type: Number,
        required: true
    },
    bleachIndex: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        select: true
    }
})

transactionSchema.plugin(uniqueValidator)
let Transaction = (module.exports = mongoose.model(
    'Transaction',
    transactionSchema
))
