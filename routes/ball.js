var express = require('express');
const ball_controlers= require('../controllers/ball');
var router = express.Router();

/* GET ball */ 
router.get('/', ball_controlers.ball_view_all_Page );
module.exports = router;

