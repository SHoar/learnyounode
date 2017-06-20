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

/* *** OFFICIAL SOLUTION using 'bl' and pipe function
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

*/
