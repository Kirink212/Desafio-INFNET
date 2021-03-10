module.exports = function(router) {
    var controller = require('../controllers/user');

    router.post('/auth', controller.auth);
    router.post('/users/create', controller.create);
}