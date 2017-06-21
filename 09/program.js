const http = require('http')
const servers = [process.argv[2], process.argv[3], process.argv[4]];
let one = '', two = '', three = '';


http.get(servers[0], (response) => {
    response.setEncoding('utf8');
    response.on("data", (data) =>{
        one+=data;
    });
    response.on("end", () => {
        console.log(one);
        http.get(servers[1], (response) => {
            response.setEncoding('utf8');
            response.on("data", (data) =>{
                two+=data;
            });
            response.on("end", () => {
                console.log(two);
                http.get(servers[2], (response) => {
                    response.setEncoding('utf8');
                    response.on("data", (data) =>{
                        three+=data;
                    });
                    response.on("end", () => {
                        console.log(three);
                    });
                });
                
            });
        });
        
    });    
});
