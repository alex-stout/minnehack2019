var mongoose = require('mongoose')
var Mill = require('../models/mill')

mongoose.model('Mill')

exports.addMill = (req, res) => {
    console.log(req.body)
    var newMill = new Mill({
        number: req.body.number,
        parentCompanyName: req.body.parentCompanyName,
        millName: req.body.millName,
        country: req.body.country,
        stateOrProvince: req.body.stateOrProvince,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })

    newMill.save(err => {
        if (err) {
            return res.status(400).send(err)
        }
        res.status(200).json({
            success: true
        })
    })
}
