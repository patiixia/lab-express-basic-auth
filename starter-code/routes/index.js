const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/signup' , (req, res) => {
  res.render('auth/signup')
})


module.exports = router;
