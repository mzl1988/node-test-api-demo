const config = require('config');
const request = require('superagent');

exports.get = option =>
	request
    .get(option.url)
    .timeout(1000 * config.timeout)
    .endAsync()
;