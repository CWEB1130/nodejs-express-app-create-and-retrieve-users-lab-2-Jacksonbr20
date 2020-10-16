var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //Q6.3
  //the statement below contains a render function - the first argument is the view name and the second argument is an object with one key/value pair.
  res.render('createuser', { title: 'Create Account'});
  //Q6.3
});


module.exports = router;
