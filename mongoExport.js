const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const dbName = "SEDB";
const client = new MongoClient(
  "mongodb+srv://rgaumond:Qk%40qMiJ9TAV%40cv4@cluster0.djc2jgg.mongodb.net/SEDB",
  { useUnifiedTopology: true }
);

client.connect(function (err) {
  //assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);

  getDocuments(db, function (docs) {
    console.log("Closing connection.");
    client.close();

    // Write to file
    try {
      fs.writeFileSync("out_file.json", JSON.stringify(docs));
      console.log("Done writing to file.");
    } catch (err) {
      console.log("Error writing to file", err);
    }
  });
});

const getDocuments = (db, callback) => {
  const query = {}; // this is your query criteria
  db.collection("todo")
    .find(query)
    .toArray(function (err, result) {
      if (err) throw err;
      callback(result);
    });
};
