const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    _id: Number,
    time: String,
    date: String,
    activity: String,
    customerID: Number,
  },
  { collection: "hero" }
);

module.exports = mongoose.model("heroModel", searchSchema);
