const db = require('nedb');

class Task {

    constructor() {
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


Task.db         = new db({ filename : __dirname + '/../../tmp/task.datastore', autoload : true});

Task.apify      = true;
module.exports  = Task;