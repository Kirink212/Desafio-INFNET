var User = require("../models/user");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const create = (req, res) => {
    var body = req.body;

    bcrypt.hash(body.password, 10, function (error, hash) {
        (async () => {
            const newUser = await User.create({
                username: body.username,
                password: hash,
            });

            res.status(200).send({user: newUser});
        })();

        if (error) {
            res.status(400).send({ error });
        }
    })
};

const auth = (req, res) => {
    var body = req.body;
    var query = { username: body.username };
    var token = null;

    (async () => {
        var currUser = await User.findAll({ 
            attributes: ["username", "password"],
            where: query,
        });
        currUser = currUser[0];

        if (currUser) {
            bcrypt.compare(body.password, currUser.password, function (err, result) {
                if (result === true){
                    token = jwt.sign({userId: currUser.id}, 'token', { expiresIn: '2h' });
                }
    
                if (token) {
                    res.status(200).send({token});
                } else {
                    res.status(400).send({ message: "invalid password" });
                }
            });
        } else {
            res.status(400).send({ message: "username not found" });
        }
    })();
};

module.exports = { auth, create };