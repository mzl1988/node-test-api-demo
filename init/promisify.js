//
// 提供promise style
//

const Promise = require('bluebird');

Promise.promisifyAll(require('fs'));
Promise.promisifyAll(require('mongoose'));
Promise.promisifyAll(require('superagent'));