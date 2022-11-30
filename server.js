const express = require("express");
const port = process.env.port || 5500;
const customersRouter = require("./routes/customers");
const toDosRouter = require("./routes/todos");
//Server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//Router
app.use("/customers", customersRouter);
app.use("/todos", toDosRouter);
// use to handle endpoints with /customer

app.get("/",(req, res)=> {
    console.log("ROOT");
    res.sendFile(__dirname+"/index.html");   
});

app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});

require('./mongoExport')