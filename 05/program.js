const fs = require('fs');
const path = require('path');
const filedir = process.argv[2], ext = process.argv[3];

function filterDir(filedir,extension){
  fs.readdir(filedir, function (err, list){
    list.forEach((file) =>  {

      if (file.indexOf('.'+extension) > -1 ){
        console.log(file);
      }
    });
  });
}

filterDir(filedir, ext);
