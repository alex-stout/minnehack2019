module.exports = app => {
    var transactionController = require('../controllers/transactionController')

    app.route('/transaction')
        .post(transactionController.createTransaction)
        .get(transactionController.getAllTransactions)
}
