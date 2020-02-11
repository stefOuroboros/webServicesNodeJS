const Generique = require('./Generique.js');


class Task extends Generique {

    constructor(object = {}) {
        super();
        this.id         = null;
        this.user_id    = null;
        this.title      = null;
        this.content    = null;

        for(let property of object) {
            if(this[property]) {
                this[property] = object[property];
            }
        }
    }

}

Task.apify      = true;
module.exports  = Task;