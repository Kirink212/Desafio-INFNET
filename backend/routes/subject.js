const { verifyJWT } = require("../middleware/auth");

module.exports = function(router) {
    var controller = require('../controllers/subject');

    router.get('/curso', verifyJWT, controller.list);
    router.post('/curso', controller.create);
}