const bcrypt = require('bcrypt');

/*
 * user post
 */

module.exports = function (req, res, next, User) {
    const { user } = req.body;

    if (!user) return res.status(400).send({error: '参数有误！'});

    if (user.password) user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));

    return User
        .createAsync(user)
        .then(user => res.send('ok')).catch(next);
};