const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    _id: Number,
    time: String,
    date: String,
    activity: String,
    customerName: String,
    customerID: Number,
    description: String,
  },
  { collection: "hero" }
);

module.exports = mongoose.model("heroModel", searchSchema);
