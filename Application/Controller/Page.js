const Generique = require('./Generique.js');

//Front & back
const cryptojs = require('crypto-js');

//Back only
const crypto = require('crypto');

class Page extends Generique {

    static index(req = null, res = null) {
        if((req == null) && (res == null)) {
            return ['/', '/index'];
        }
        res.render('index');
    }

    static login(req = null, res = null) {
        if((req == null) && (res == null)) {
            return ['/login'];
        }

        let salt    = crypto.randomBytes(128);
        let key     = cryptojs.PBKDF2('password', salt.toString(), {keySize: 512/32, iteration: 1000});

        req.session.views.login = {
            secureKey: key.toString()
        }

        res.render('login', {
            key : req.session.login.secureKey
        });
    }

    static register(req = null, res = null) {
        if((req == null) && (res == null)) {
            return ['/register'];
        }
        res.render('register');
    }
}

module.exports = Page;