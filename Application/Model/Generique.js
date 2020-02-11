const Database = require('../Library/Database.js');

class Generique {
    static find(){
        Database.getInstance(this.name).find(...arguments);
    }
    static findOne(){
        Database.getInstance(this.name).findOne(...arguments);
    }
    static insert(){
        Database.getInstance(this.name).insert(...arguments);
    }
    static update(){
        Database.getInstance(this.name).update(...arguments);
    }
    static delete(){
        Database.getInstance(this.name).remove(...arguments);
    }
}

module.exports = Generique;