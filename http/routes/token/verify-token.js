//
// user login
//

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next, User) {
    const { token } = req.body;

    if (!token) return res.status(400).send({ error: '参数有误！' });

    jwt.verify(token, config.auth.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' });

        return User.findById(decoded.id)
            .lean()
            .execAsync()
            .then(user => res.send(user)).catch(next);
    });
};