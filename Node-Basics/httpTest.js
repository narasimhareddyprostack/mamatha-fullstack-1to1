const mamatha = require("http");
const os = require('os');
var osplat = os.platform();
var x = mamatha.createServer(function (req, res) {
  res.write(osplat);
  
  res.end();
});
x.listen(9000, () => {
  console.log("Server Running on 9000 Port:");
});
