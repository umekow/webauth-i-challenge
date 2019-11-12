const db = require('../data/db-config.js'); 

//returns users
const find = () => {
    return db('accounts').select('id', 'username');
}

//finds users based on condition
const findBy = (filter) => {
    return db('accounts').where(filter)
}

const add = user => {
    return db('accounts')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids; 
        return findById(id); 
    }); 
}

const findById = id => {
    return db('accounts')
    .select('id', 'username')
    .where({id})
    .first(); 
}

//export
module.exports = {add, find, findById, findBy}