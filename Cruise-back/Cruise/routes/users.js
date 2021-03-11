var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res)  {
  console.log(req);
})
router.put('/update', function(req, res) {
});

module.exports = router;
