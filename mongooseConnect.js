const mongoose = require("mongoose");
const connection = "mongodb://localhost:27017/SEDB";
//Db connection
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", function (error) {
        return console.log("MONGO ERROR:" + error);
    });
db.once("open", ()=>{
    console.log("Connected to DB")
});

module.exports = mongoose.connection;