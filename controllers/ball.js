var ball = require('../models/ball'); 
 
// List of all ball
exports.ball_list = async function (req, res) {
    try {
        let balls = await ball.find();
        res.send(balls);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.ball_view_all_Page = async function (req, res) {
    try {
        theball = await ball.find();
        res.render('ball', { title: 'ball Search Results', results: theball });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

 
// for a specific ball. 
exports.ball_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball detail: ' + req.params.id); 
}; 
 
// Handle ball create on POST. 
exports.ball_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ball();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.color = req.body.color; 
    document.price = req.body.price; 
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle ball delete form on DELETE. 
exports.ball_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball delete DELETE ' + req.params.id); 
}; 
 
// Handle ball update form on PUT. 
exports.ball_update_put =async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await ball.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


// for a specific Costume. 
exports.ball_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await ball.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
