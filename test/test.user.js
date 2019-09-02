var should = require("should");
const bcrypt = require('bcrypt');
var User = require("../common/models/user.js");

describe('User', function () {

    before(function (done) {
        done();
    });

    after(function (done) {
        done();
    });

    beforeEach(function (done) {
        var user = new User({
            username: 'Llg',
            password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10))
        });

        user.save(function (error) {
            if (error) console.log('error' + error.message);
            else console.log('no error');
            done();
        });

        // var user = new User({
        //     username: 'LiLi',
        //     password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10))
        // });

        // user.save(function (error) {
        //     if (error) console.log('error' + error.message);
        //     else console.log('no error');
        //     done();
        // });
    });

    it('find a user by username', function (done) {
        User.findOne({ username: 'Llg' }, function (err, user) {
            user.username.should.eql('Llg');
            console.log("   username: ", user.username);
            done();
        });
    });

    // afterEach(function (done) {
    //     User.remove({}, function () {
    //         done();
    //     });
    // });

});