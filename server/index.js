const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ git: "good" });
});

//routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server listening the port http://localhost/" + PORT);
});
