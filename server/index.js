const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("connected");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server listening the port http://localhost/"+PORT);
});