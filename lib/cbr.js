var argv = require('minimist')(process.argv.slice(2));
var child_process = require('child_process');


// Utility function
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}

if (process.platform == "darwin") {
  child_process.execFile('bin/darwin/unrar', ['e', '-y', argv._[0], './temp/'], function(error, stdout, stderr){
    console.log("Extrating in ./temp/");
    console.log(stdout);
  });
} else if (process.platform.startsWith('win')) {
  child_process.execFile('bin/win/UnRAR.exe', ['e', '-y', argv._[0], './temp/'], function(error, stdout, stderr){
    console.log("Extrating in ./temp/");
  	console.log(stdout);
  });
} else {
  console.error("Operating system not supported. Currently only supports Windows or Mac");
}
