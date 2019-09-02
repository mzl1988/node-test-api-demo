//
// 正在上映
//
const superagentUtil = require (__base + '/common/util/superagent-util');

module.exports = function (req, res, next) {
    superagentUtil
        .get({url: 'https://api.douban.com/v2/movie/in_theaters'})
        .then(result => {
            res.send(result.body);
        })
        .catch(next);
};