var express = require('express');
const ball_controlers= require('../controllers/ball');
var router = express.Router();

/* GET ball */ 
router.get('/', ball_controlers.ball_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ball', { title: 'Search Results ball' });
});

module.exports = router;