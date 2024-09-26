const mongoose = require("mongoose");
const uri =
  "mongodb+srv://rgaumond:<password>@cluster0.djc2jgg.mongodb.net/SEDB";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected. Attempting to reconnect...");
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});
