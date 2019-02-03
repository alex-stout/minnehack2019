var mongoose = require('mongoose')
var Transaction = require('../models/transaction')

mongoose.model('Transaction')

exports.createTransaction = (req, res) => {
    console.log(req.body)

    var newTransaction = new Transaction({
        ...req.body
    })

    newTransaction.save(err => {
        if (err) return res.status(400).send(err)
        console.log('saved transaction')
        res.status(200).json({
            success: true
        })
    })
}

exports.getAllTransactions = (req, res) => {
    Transaction.count((err, count) => {
        Transaction.find((err, transactions) => {
            if (err) {
                console.log(err)
            }
            res.status(200).send({ count, transactions })
        })
    })
}
