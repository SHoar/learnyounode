const path = require('path');
const dirFilter = require('./DirFilter');
const filedir = process.argv[2],
      ext = process.argv[3];
const callback = (err, list) => {
    if (err) throw err;
    list.forEach((file) => {
        console.log(file);
    });
}
dirFilter(filedir, ext, callback);
