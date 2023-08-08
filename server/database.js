const mongoose = require("mongoose");

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/Photosphere", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
