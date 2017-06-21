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

/*************************************/
/*      Official Solution            */
/*************************************/
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0

    // function printResults () {
    //   for (var i = 0; i < 3; i++) {
    //     console.log(results[i])
    //   }
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err) {
    //         return console.error(err)
    //       }

    //       results[index] = data.toString()
    //       count++

    //       if (count === 3) {
    //         printResults()
    //       }
    //     }))
    //   })
    // }

    // for (var i = 0; i < 3; i++) {
    //   httpGet(i)
    // }