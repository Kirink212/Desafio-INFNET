module.exports = function(router) {
    var controller = require('../controllers/subject');

    router.get('/curso', controller.list);
    router.post('/curso', controller.create);
}