const db        = require('nedb');
let instances   = {}

class Database {

    static getInstance(name) {
        if(!instances[name]) {
            instances[name] =  new db({ filename : __dirname + '/../../tmp/' + name + '.datastore', autoload : true});
        }
        return instances[name];
    }
}

module.exports = Database;