const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    _id: Number,
    name:String,
    details: String 

},{ collection : 'stack' });

module.exports = mongoose.model("StackModel", searchSchema)