//
// user login
//
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('underscore');
const config = require('config');

module.exports = function (req, res, next, User) {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send({ error: '参数有误！' });

    return User.findOne()
        .lean() // 返回的结果就是js对象, 失去save等方法
        .where('username').equals(username)
        .select('+password')
        .execAsync()
        .then(user => {
            if (!user)
                return res.status(400).send({ error: 'User not found' });

            if (!bcrypt.compareSync(password, user.password))
                return res.status(400).send({ error: 'Invalid password' });

            const token = jwt.sign(
                {
                    id: user._id
                },
                config.auth.secret,
                {
                    expiresIn: 60 * 60 // // 签署一个令牌到期的1小时
                }
            );
            user = _.omit(user, 'password');
            res.send({ user, token });

        })
        .catch(next);
};