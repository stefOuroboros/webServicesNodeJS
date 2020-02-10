const db = require('nedb');
class User {

    constructor() {
        this.id         = null;
        this.firstName  = null;
        this.lastName   = null;
        this.email      = null;
        this.password   = null;
        this.tasks      = [];

        for(let property of object) {
            if(this[property]) {
                this[property] = object[property];
            }
        }
    }

}

User.db     = new db({ filename : __dirname + '/../../tmp/user.datastore', autoload : true});
User.apify  = true;

module.exports = User;