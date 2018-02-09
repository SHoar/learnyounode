const http = require('http');
const url = require('url');
const port = process.argv[2];

let isoTime = new Date().toISOString();

const server = http.createServer((req, res) =>{
   if (req.method !== 'GET' ){
       res.write('METHOD must be a GET request.');
   } else {
      // get /api/parsetime?iso= + date
      server.get(url+'iso?='+isoTime, (req, res, url) => {
        // parse response for json
        let parsedURL = url.parse(req.url,true);
        if (url == '/api/parsetime'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write('parsedUrl');
        } else if(url == '/api/unixtime'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write('parsedUrl');

        )
      })
      

   }
});

server.get(url);

server.listen(port);