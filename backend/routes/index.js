module.exports = function(app) {
    require('./user')(app);
    require('./subject')(app);
}