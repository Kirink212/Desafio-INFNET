
const jwt = require('jsonwebtoken');
const Subject = require("../models/subject");
const { verifyJWT } = require("../utils/utils");

const create = (req, res) => {
    var body = req.body;

    (async () => {
        const subjects = await Subject.findAll();

        res.status(200).send(subjects);
    })();
};

const list = (req, res) => {
    verifyJWT(jwt, req, res);

    (async () => {
        const subjects = await Subject.findAll();

        res.status(200).send(subjects);
    })();
};

module.exports = { list, create };