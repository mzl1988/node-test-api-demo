module.exports = function (req, res, next, User) {
    const { id } = req.params;
    
    if (!id) return res.status(400).send({error: '参数有误！'});

    return User.findByIdAndRemove(id)
        .execAsync()
        .then(user => res.end('ok')).catch(next);
};