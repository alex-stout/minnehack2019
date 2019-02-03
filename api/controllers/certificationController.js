var mongoose = require('mongoose')
var Certification = require('../models/certification')

mongoose.model('Certification')

exports.addCertification = (req, res) => {
    console.log(req.body)
    var newCertification = new Certification({
        ...req.body
    })

    newCertification.save(err => {
        if (err) return res.status(400).send(err)
        console.log('saved cert')
        res.status(200).json({
            success: true
        })
    })
}

exports.getAllCertifications = (req, res) => {
    Certification.count((err, count) => {
        Certification.find((err, certifications) => {
            if (err) {
                console.log(err)
            }
            res.status(200).send({ count, certifications })
        })
    })
}

exports.getCertification = (req, res) => {
    if (!req.params.millName) {
        res.status(400).send({ success: false })
    }
    res.status(200).send({ message: 'WIP' })
}
