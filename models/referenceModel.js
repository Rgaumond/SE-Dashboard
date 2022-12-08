const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    _id: Number,
    product: String,
    features: Array,
    name: String,
    details: String,
  },
  { collection: "references" }
);

module.exports = mongoose.model("ReferenceModel", searchSchema);
