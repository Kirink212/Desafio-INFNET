const Subject = require("../models/subject");

const create = (req, res) => {
    var body = req.body;

    (async () => {
        const subjects = await Subject.findAll();

        res.status(200).send(subjects);
    })();
};

const list = (req, res) => {
    (async () => {
        const subjects = await Subject.findAll();

        res.status(200).send(subjects);
    })();
};

module.exports = { list, create };