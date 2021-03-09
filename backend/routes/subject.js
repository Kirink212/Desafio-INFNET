module.exports = function(app) {
    var controller = require('../controllers/subject');

    app.route('/curso')
        .post(controller.list)
        .options(function(req, res) {res.json({})});
}