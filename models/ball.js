const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
 color: {type:String, required:true}, 
 price: { type: Number, min: 5, max: 60 }, 
 weight: { type: Number, min: 1, max: 60 } 
}) 

module.exports = mongoose.model("ball", ballSchema) 