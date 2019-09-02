//
// 註冊路由
//

const express = require('express');

const app = (module.exports = express.Router());

//
// token
//

// verify-token
app.route('/verify-token')
.post(require('./token/verify-token'));

// user
app.route('/user')
.get(require('./user/user-gets'))
.post(require('./user/user-post'));

app.route('/user/:id')
.get(require('./user/user-get'))
.put(require('./user/user-put'))
.delete(require('./user/user-delete'));

app.route('/login')
.post(require('./user/user-login'))

//
// douban
//

// 正在上映
app.route('/movie/in-theaters')
.get(require('./douban/movie/in-theaters'));

// 即将上映
app.route('/movie/coming-soon')
.get(require('./douban/movie/coming-soon'));

// Top250
app.route('/movie/top250')
.get(require('./douban/movie/top250'));