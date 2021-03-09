module.exports = function(app) {
    var controller = require('../controllers/user');

    app.route('/auth')
        .post(controller.auth)
        .options(function(req, res) {res.json({})});
}