const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) =>{
   if (req.method == 'POST'){
      req.pipe(map({wantStrings: true}, (chunk ) => {
          return chunk.toUpperCase();
      })).pipe(res);
   } else { console.log('this did not work');}
});
   
   
   
   
   





server.listen(port);