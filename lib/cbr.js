var child_process = require('child_process');

// Utility function
if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function (str){
    return this.indexOf(str) === 0;
  };
}

if (process.platform == "darwin") {
  child_process.execFile('bin/darwin/unrar', ['e -y', 'comic.cbr'], function(error, stdout, stderr){
    console.log(stdout);
  });
} else if (process.platform.startsWith('win')) {
  child_process.execFile('bin/win/UnRAR.exe', ['e -y', 'comic.cbr'], function(error, stdout, stderr){
  	console.log(stdout);
  });
}
