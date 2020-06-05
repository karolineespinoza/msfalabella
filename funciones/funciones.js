const fs = require('fs');

exports.escribir = function(data) {
  try{
    const path = './archivos/';
    const nombreArchivo = 'cliente'+ data.rut +'.txt';
    fs.writeFile(path+nombreArchivo, JSON.stringify(data), function(err) {
      // If an error occurred, show it and return
        if(err) {
          return console.error(err);
        }
    });
  }
  catch(error){
    return error;
  }
}