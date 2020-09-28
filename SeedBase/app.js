import express from "express";

import chalk from "chalk";

const app = express();
app.get("/", (req, res) => {
  res.render("index", {message:'Hello'});
});
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.listen(9000, () => {
  console.log(`${chalk.blue(`Server Runnning on port{9000}`)}`);
  //console.log('Server Running port : 9000');
});
