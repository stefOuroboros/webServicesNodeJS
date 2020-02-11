const Generique = require('./Generique.js');

class User extends Generique {

    constructor(object = {}) {
        super();
        this.id         = null;
        this.firstName  = null;
        this.lastName   = null;
        this.email      = null;
        this.password   = null;
        this.tasks      = [];

        for(let property in object) {
            if(!this[property]) {
                this[property] = object[property];
            }
        }
    }

}

User.apify  = true;

module.exports = User;