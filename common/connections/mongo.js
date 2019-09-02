//
// Mongodb connection對象
//

const mongoose = require('mongoose');
const moment = require('moment');
const config = require('config');

const mongoUri = config.mongo.uri || `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`;

const connection = (module.exports = mongoose.createConnection(mongoUri, {
    useNewUrlParser: true,
    server: {
        poolSize: config.mongo.poolSize || 5,
        keepAlive: 1
    },
    user: config.mongo.user,
    pass: config.mongo.password
}
));

connection.on('error', function (err) {
    console.error('');
    console.error(`[ERROR] ${moment().format('YYYY-MM-DD HH:mm:ss')} Handled error`);
    console.error(err.stack);
});

