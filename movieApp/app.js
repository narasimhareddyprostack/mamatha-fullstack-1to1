import express from "express";
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.use("/", function (req, res, next) {
  var options = {
    root: path.join(__dirname),
  };

  var fileName = "index.html";
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
      next();
    }
  });
});

app.get("/", function (req, res) {
  console.log("File Sent");
  res.send();
});
app.listen(6700, (err) => {
  console.log("Server Running on Post Number:6700");
});
