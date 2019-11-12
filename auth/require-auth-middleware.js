const bcyrpt = require('bcryptjs'); 
const Users = require('../users/users-model'); 

module.exports = (req, res, next) => {
    let {username, password} = req.headers; 

    if(username && password){
        Users.findBy({username})
        .first()
        .then(user => {
            if(user && bcyrpt.compareSync(password, user.password)){
                next(); 
            }else {
                res.status(401).json({message: `Invalid Credentials`})
            }
        })
        .catch(error => {
            console.log('login error', error);
            res.status(500).json({message: 'please provide credentials'})
        })
    }else {
        res.status(400).json({message: 'please provided credentials'})
    }
}