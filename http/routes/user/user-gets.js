const Promise = require('bluebird');

module.exports = function (req, res, next, User) {
    // console.log(req.userId);
    const { username, limit, offset } = req.query;

    const query = User.find()
        .lean()
        .limit(limit || 10)
        .skip(offset || 0)
        .sort('created_at');

    if (username) {
        // query.where('username').equals(new RegExp(username, 'i'));
        query.where('username').equals(username);
    }

    return Promise.all([
        query.execAsync(),
        query.countAsync()
    ])
        .spread((data, count) =>
            res.send({
                data,
                count
            })).catch(next);
};
