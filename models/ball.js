const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
 color: String, //balltype
 price: Number, //size or costumesize
 weight: Number //cost or costumecosyt
}) 
 
module.exports = mongoose.model("ball", 
ballSchema) 