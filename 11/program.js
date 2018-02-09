const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const filePath = process.argv[3];

const server = http.createServer((request, response) =>  {
   let readStream = fs.createReadStream(filePath);
   readStream.pipe(response);
});

server.listen(port);


/****************************/
/*    Official Solution     */
/****************************/
// var http = require('http')
//     var fs = require('fs')

//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })

//       fs.createReadStream(process.argv[3]).pipe(res)
//     })

//     server.listen(Number(process.argv[2]))
