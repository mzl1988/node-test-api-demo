//
// 載入所有模型，用于註冊express dependency injection
//

const _ = require('underscore');
const _s = require('underscore.string');
// _s.classify("some_class_name");
// // => "SomeClassName"

const models = require('require-dir')();

const app = require(__base + '/http');

_.each(models, (Model, name) => {
    app.factory(_s.classify(name), (req, res, next) => next(null, Model));
});
