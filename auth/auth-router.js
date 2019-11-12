//imports
const router = require('express').Router(); 
const bcrypt = require('bcryptjs'); 
const Users = require('../users/users-model.js'); 

router.post('/register', (req, res) => {
    let user = req.body; 
    hash = bcrypt.hashSync(user.password, 8); 
    user.password = hash; 

    Users.add(user)
    .then(saved => {
        req.session.username = saved.username; 
        res.status(201).json(saved);
        })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.username = user.username; // << good: add properties to existing session object
        // req.session = { username: user.username } // bad panda: don't override the session object
        res.status(200).json({
          message: `Welcome ${user.username}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('/logout', (req, res) => {
    if (req.session){ 
    req.session.destroy(error => {
        if (error) {
            res.status(500).json({message: "you cannot log out right now"})
        }
    })
    res.status(200).json({messsage: 'logged out!'})
    } else { 
        res.status(200).json({message : "bye felicia"})
    }
})

//export router
module.exports = router; 