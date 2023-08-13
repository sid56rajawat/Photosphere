const express = require("express");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ git: "good" });
});

//routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

app.get("/validateToken", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findOne({ username: decodedToken.userName });

    if (user) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error("Token validation error:", error);
    res.json({ valid: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening the port http://localhost/" + PORT);
});
