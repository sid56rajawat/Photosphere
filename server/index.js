const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ git: "good" });
});

//routes
app.use("/register", require("./routes/register"));

// app.post("/api/register", (req, res) => {
//   const user = req.body;
//   console.log(user);
//   // TODO: Check with all userNames in database
//   if (user.userName === "sid56rajawat") {
//     res.send("invalid username");
//   } else {
//     // store user in Database
//     // redirect to login page
//     res.send("valid username");
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening the port http://localhost/" + PORT);
});
