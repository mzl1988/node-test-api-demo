//
// 配置文件
//

module.exports = {
    timeout: 10,
    http: {
        port: process.env.PORT || 3000
    },

    auth: {
        secret: '123456'
    },

    mongo: {
        uri: null,
        host: 'localhost',
        port: 27017,
        database: 'ionic',
        user: null,
        password: null
    }
};