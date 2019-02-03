var mongoose = require('mongoose')
var Mill = require('../models/mill')
var Certification = require('../models/certification')

mongoose.model('Mill')
mongoose.model('Certification')

exports.addMill = (req, res) => {
    Certification.findOne({ millName: req.body.millName }, (err, cert) => {
        console.log(cert)
        var score = 0
        var rating = ''
        if (cert.RSPOCertified) {
            score += 5
        }
        if (cert.outReachPrograms) {
            score += 1
        }
        if (cert.noDeforestationPolicy) {
            score += 2
        }
        if (cert.responsibilitySourcingPolicy) {
            score += 2
        }

        console.log(score)

        switch (true) {
            case score <= 12 && score >= 11:
                rating = 'A'
                break
            case score <= 10 && score >= 8:
                rating = 'B'
                break
            case score <= 7 && score >= 5:
                rating = 'C'
                break
            case score <= 4 && score >= 2:
                rating = 'D'
                break
            case score <= 1 && score >= 0:
                rating = 'F'
                break
            default:
                rating = 'N/A'
        }

        console.log(rating)
        var newMill = new Mill({
            number: req.body.number,
            parentCompanyName: req.body.parentCompanyName,
            millName: req.body.millName,
            country: req.body.country,
            stateOrProvince: req.body.stateOrProvince,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            rating
        })

        newMill.save(err => {
            if (err) {
                return res.status(400).send(err)
            }
            console.log('saved mill')
            res.status(200).json({
                success: true
            })
        })
    })
}

exports.getMills = (req, res) => {
    Mill.count((err, count) => {
        Mill.find((err, users) => {
            if (err) {
                console.log(err)
            }
            res.status(200).send({ count, users })
        })
    })
}
