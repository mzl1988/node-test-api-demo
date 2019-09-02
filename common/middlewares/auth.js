const jwt = require('jsonwebtoken');
const config = require('config');

const whiteRoutes = [
    '/login',
    '/verify-token',
    // '/movie/in-theaters'
];

module.exports = (req, res, next) => {
    // console.log("===============================================");
    // console.log(req.method);
    // console.log(req.headers);

    if(whiteRoutes.indexOf(req.url) !== -1 || req.method === 'OPTIONS') return next();
    
    const authHeader = req.headers.authorization;
    
    if(!authHeader) return res.status(401).send({error: 'No token provided'});
    
    const parts = authHeader.split(' ');

    if(!parts.length === 2) return res.status(401).send({error: 'Token error'});

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({error: 'Token malformatted'});

    jwt.verify(token, config.auth.secret, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'});

        req.userId = decoded.id;
        next();
    });
}