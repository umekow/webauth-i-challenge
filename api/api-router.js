const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const bcrypt = require('bcryptjs'); 
router.use('/auth', authRouter);


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



