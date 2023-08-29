const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
const connectToMongoDBAtlas = require("./config/dbConn");
const atlasConnectionString =
  "mongodb+srv://rohitsaini3523:testing123@cluster0.enqxn8v.mongodb.net/Photosphere";
connectToMongoDBAtlas(atlasConnectionString);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ git: "good" });
});

//routes
app.use("/register", require("./routes/api/register"));
app.use("/login", require("./routes/api/login"));
app.use("/validateToken", require("./middleware/validateToken"));
// TODO: router

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening the port http://localhost/" + PORT);
});
