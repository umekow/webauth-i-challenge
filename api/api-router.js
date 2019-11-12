//imports

const router = require('express').Router();
const bcrypt = require('bcryptjs'); 

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js')

router.use('/auth', authRouter);
router.use('/users', usersRouter); 


router.get('/', (req, res) => {
  res.json({ api: "It's working!!!" });
});

router.post('/auth/hash', (req, res) => {
  let credentials = req.body
  

  const hash = bcrypt.hashSync(password, 14); 
  credentials.password = hash;

  usersRouter.
  res.status(200).json({password, hash});

})

module.exports = router;



