const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.json({ git: "good" });
});

app.post("/api/register", urlencodedParser, (req, res) => {
  const user = req.body;
  console.log("request recieved");
  // TODO: Check with all userNames in database
  if (user.userName === "sid56rajawat") {
    res.send("invalid username");
  } else {
    // store user in Database
    // redirect to login page
    res.send("valid username");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening the port http://localhost/" + PORT);
});
