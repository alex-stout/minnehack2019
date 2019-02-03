module.exports = app => {
    var certificationController = require('../controllers/certificationController')

    app.route('/certification')
        .post(certificationController.addCertification)
        .get(certificationController.getAllCertifications)

    app.route('/certification/:millName').get(
        certificationController.getCertification
    )
}
