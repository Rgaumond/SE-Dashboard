const mongoose = require("mongoose");
const connection = "mongodb://127.0.0.1:27017/SEDB";
//Db connection
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", function (error) {
        return console.log(error);
    });
db.once("open", ()=>{
    console.log("Connected to DB")
});

module.exports = mongoose.connection;