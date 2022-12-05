const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    _id: Number,
    name:String,   
    targetDate:String,
    creationDate: String,
    details: String 

},{ collection : 'todo' });

module.exports = mongoose.model("ToDoModel", searchSchema)