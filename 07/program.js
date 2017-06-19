const http = require('http');
const URL = process.argv[2];

http.get(URL, (response) => {
    response.setEncoding('utf8').on("data",  (data) => {
        console.log(data);
    });
});
