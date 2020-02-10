const path = require('path');

class Generique {

    static index(req = null, res = null) {
        if((req == null) && (res == null)) {
            return ['/', '/index'];
        }
        res.sendFile(path.resolve(__dirname + '/../View/index.html'))
    }
}

module.exports = Generique;