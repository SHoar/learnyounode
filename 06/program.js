const dirFilter = require('./DirFilter')
const filedir = process.argv[2],
      ext = process.argv[3];

dirFilter(filedir, ext, (err, data)){
  if err throw err;
  var list = data;
  for( file in list){
    console.log(file);
  }
});
