const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, ext, callback){
  fs.readdir(dirPath,  (err, data) => {
    if (err) return callback(err);
    data = data.filter((file) =>{
      if(path.extname(file) === '.' + ext){
        return true;
      }
    });
  callback(null, data);
  });
}
