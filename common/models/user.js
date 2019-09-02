//
// user
//

const mongoose = require('mongoose');

const db = require('../connections/mongo');

const schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    age: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = db.model('user', schema);
