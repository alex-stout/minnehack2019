module.exports = app => {
    var utilityController = require('../controllers/utilityController')

    app.route('/mill')
        .post(utilityController.addMill)
        .get(utilityController.getMills)
}
