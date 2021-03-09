var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var sequelize = require('sequelize');
var cors = require('cors');
var routes = require('routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

// app.use(expressJwt({secret: 'token'}).unless({path: ['/users/auth']}));