function verifyJWT(jwt, req, res, callback = () => {}) {
    const token = req.headers['authorization'];
    jwt.verify(token, 'token', (error, decoded) => {
        if (error) {
            return res.status(401).send({ message: "unauthorized" });
        }

        req.userId = decoded.userId;

        callback();
    });
}

module.exports = { verifyJWT }