const Database = require('../Application/Library/Database.js')
const User = require('../Application/Model/User.js')


Database.getInstance(User.name).insert(new User({
    firstName: 'Titi',
    lastName: 'Du Titi'
}));

Database.getInstance(User.name).insert(new User({
    firstName: 'Toto',
    lastName: 'Du Toto'
}));

Database.getInstance(User.name).insert(new User({
    firstName: 'Tati',
    lastName: 'Du Tota'
}));