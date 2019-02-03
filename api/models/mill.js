let mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

//Mill Schema
let millSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true,
        select: false
    },
    parentCompanyName: {
        type: String,
        required: true,
        select: true
    },
    millName: {
        type: String,
        required: true,
        select: true
    },
    country: {
        type: String,
        required: true,
        select: true
    },
    stateOrProvince: {
        type: String,
        required: true,
        select: true
    },
    latitude: {
        type: String,
        required: true,
        select: true
    },
    longitude: {
        type: String,
        required: true,
        select: true
    },
    rating: {
        type: String,
        required: false,
        select: true
    }
})
millSchema.plugin(uniqueValidator)
let Mill = (module.exports = mongoose.model('Mill', millSchema))
