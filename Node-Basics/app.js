const testOS = require("os");


var freeMem = testOS.freemem();
var osPlatform = testOS.platform();
var tempDr = testOS.tmpdir();
var tMem = testOS.totalmem();


console.log("Free Memory of Machine:", freeMem);
console.log("Platform of Machine:", osPlatform);
console.log("Temp Dir of Machine:", tempDr);
console.log("Total Mermory of Machine:", tMem);
