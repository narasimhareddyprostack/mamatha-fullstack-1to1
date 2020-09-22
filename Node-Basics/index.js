const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Welcome to PSA</h1>");
});

app.listen(5000, function (err) {
  console.log(`Server Running on Port: ${5000}`);
});
