const http = require('http')
const URL = process.argv[2];

http.get(URL, (response) => {
    let stream = '';

    response.on("data", (data) =>{
        stream += data;
    });
    response.on("end", () => {
        console.log(stream.length+"\n"+stream);
    });
});
