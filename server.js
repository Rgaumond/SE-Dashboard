const express = require("express");
const port = process.env.port || 5500;
const customersRouter = require("./routes/customers");
const toDosRouter = require("./routes/todos");
const referenceRouter = require("./routes/references");
const heroRouter = require("./routes/hero");
const stackRouter = require("./routes/stack");
//Server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router
app.use("/customers", customersRouter);
app.use("/todos", toDosRouter);
app.use("/references", referenceRouter);
app.use("/heros", heroRouter);
app.use("/stack", stackRouter);
// use to handle endpoints with /customer

app.get("/", (req, res) => {
  console.log("ROOT");
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});

require("./mongoExport");
