//imports 
const router = require('express').Router(); 

const Users = require('./users-model.js');

const requireAuth = require('../auth/require-auth-middleware'); 


//endpoints
router.get('/', requireAuth, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users); 
    })
    .catch(error => res.send(error))
})

module.exports = router; 