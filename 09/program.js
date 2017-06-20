const http = require('http')
const servers = [process.argv[2], process.argv[3], process.argv[4]];
const data = [];

for (let i = 0; i < servers.length; i++){
    http.get(servers[i], (response) => {
        response.setEncoding('utf8');
        response.on("data", (stream) =>{
           data[i]+=stream;
        });
        response.on("end", () => {
           if (data[i] !== undefined){
           console.log(data[i]);
           }
       });
    });
}
