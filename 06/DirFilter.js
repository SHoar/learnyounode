const fs = require('fs');

module.exports = function (dirName, extName, callback){
  fs.readdir(filedir, (err, data)) => {
    if err return callback(err);
    list.forEach((file) =>  {

      if (file.indexOf('.'+extension) > -1 ){
        console.log(file);
      }
    });

    callback(null, data);
  });
}));
