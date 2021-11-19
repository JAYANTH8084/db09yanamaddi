var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ball_controller = require('../controllers/ball');
var ball_controlers = require('../controllers/ball');

/// API ROUTE ///
/* GET balls */ 
router.get('/', ball_controlers.ball_view_all_Page ); 
// GET resources base.
router.get('/', api_controller.api);
/// ball ROUTES ///
// POST request for creating a ball.
router.post('/balls', ball_controller.ball_create_post);
// DELETE request to delete ball.
router.delete('/balls/:id', ball_controller.ball_delete);
// PUT request to update ball.
router.put('/balls/:id', ball_controller.ball_update_put);
// GET request for one ball.
router.get('/balls/:id', ball_controller.ball_detail);
// GET request for list of all ball items.
router.get('/balls', ball_controller.ball_list);



/* GET detail ball page */ 
router.get('/detail', ball_controlers.ball_view_one_Page); 

/* GET create ball page */ 
router.get('/create', ball_controlers.ball_create_Page); 

/* GET create update page */ 
router.get('/update', ball_controlers.ball_update_Page); 

/* GET create ball page */ 
router.get('/delete', ball_controlers.ball_delete_Page);
module.exports = router;