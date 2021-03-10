var express = require('express');
var bodyParser = require('body-parser');
var database = require('./utils/database');
var cors = require('cors');
var routes = require('./routes');

// Loading database (async)
var models = require('./models');
models();
(async () => {
    try {
        await database.sync();
        console.log("Database successfully loaded");
    } catch (error) {
        console.log(error);
    }
}) ();

// Configuring the express application
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Loading created routes
const router = express.Router();
routes(router);
app.use('/', router);

// Listening to chosen PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 404: Page not Found
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});