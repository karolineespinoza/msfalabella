const fs = require('fs');

exports.escribir = function(data) {

    fs.writeFile('binary.txt', data, function(err) {
      // If an error occurred, show it and return
      if(err) {
        return console.error(err);
      }
    });
}