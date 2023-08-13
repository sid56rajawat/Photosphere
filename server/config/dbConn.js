const mongoose = require("mongoose");

function connectToMongoDBAtlas(connectionStr) {
  mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
}

module.exports = connectToMongoDBAtlas;

