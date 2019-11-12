const db = require('../data/db-config.js'); 

//returns users
const find = () => {
    return db('users').select('id', 'username');
}

//finds users based on condition
const findBy = (filter) => {
    return db('users').where(filter)
}

//export
module.exports = {add, find, findById, findBy}