const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next = () => {}) {
    const token = req.headers['authorization'];

    jwt.verify(token, 'token', (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: "unauthorized" });
        }

        next();
    });
}

module.exports = { verifyJWT }