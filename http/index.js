//
// express app對象
//

require('../init');

var express = require('express');
var bodyParser = require('body-parser');
// var multer = require('multer');
var moment = require('moment');
var cors = require('cors');
var createError = require('http-errors');
var authWiddleware = require(__base + '/common/middlewares/auth');

// 創建express對象
var app = (module.exports = express());

// 註冊model到express-di
require(__base + '/common/models');

// const whitelist = [
//     'http://192.168.24.226:8100'
// ];

// const corsOptions = {
//     origin: function (origin, callback) {
//         //允许没有来源的请求
//         //（如移动应用程序或curl请求）
//         if (!origin) return callback(null, true);
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// 中間件
// app.use(cors(corsOptions));
app.use(authWiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__base + '/public'));
// app.use(multer());

// 掛載路由
app.use(require('./routes/router'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    console.error('');
    console.error(`[ERROR] ${moment().format('YYYY-MM-DD HH:mm:ss')} Handled error`);
    console.error(err.stack);
    res.status(err.status || 500).send({ error: err.message });
});

// Process error handler
process.on('uncaughtException', function (err) {
    console.error('');
    console.error(`[ERROR] ${moment().format('YYYY-MM-DD HH:mm:ss')} Uncaught exception`);
    console.error(err.stack);

    return process.exit();
});
