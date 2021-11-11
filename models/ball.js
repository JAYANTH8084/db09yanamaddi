const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
 color: String, 
 price: Number, 
 weight: Number 
}) 
 
module.exports = mongoose.model("ball", 
ballSchema) 