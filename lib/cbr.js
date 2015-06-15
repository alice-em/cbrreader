var child_process = require('child_process');

var cbr = function cbr (source, callback) {
  var unrar = 'bin/win/UnRAR.exe';

  // Reset the path if platform is darwin
  if (process.platform == "darwin") {
    unrar = 'bin/darwin/unrar';
  }

  child_process.execFile(unrar, ['e', '-y', source, './temp/'], function (error, stdout, stderr) {
    if (error) {
      return callback(error);
    }
    callback(null, stdout);
  })
}

module.exports = cbr;
