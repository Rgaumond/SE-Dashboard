const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    _id: Number,
    name:String,
    details: String 

},{ collection : 'hero' });

module.exports = mongoose.model("heroModel", searchSchema)