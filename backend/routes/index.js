module.exports = function(router) {
    require('./user')(router);
    require('./subject')(router);
};