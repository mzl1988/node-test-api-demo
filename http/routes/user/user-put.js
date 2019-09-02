module.exports = function (req, res, next, User) {
    const { id } = req.params;

    if (!id) return res.status(400).send({error: '参数有误！'});

    return User
        .findByIdAndUpdate(id, req.body)
        .execAsync()
        .then((user) => res.send('ok')).catch(next);
};