const net = require('net')
const port = process.argv[2];
const d = new Date();

let year =  d.getFullYear();
let month = d.getMonth()+1;
if (month < 10){ month= '0'+month;}
let day = d.getDate();
if (day < 10){ day= '0'+day;}
let hour = d.getHours();
if (hour < 10){ hour= '0'+hour;}
let minutes = d.getMinutes();
if (minutes < 10){ minutes= '0'+minutes;}

let time = year+"-"+month+"-"+day+" "+hour+":"+minutes+"\n";

const server = net.createServer(function listener(socket) {
// socket handling logic
    socket.end( time );
});

server.listen(port);

/***************************
*     Official Solution    *
***************************/

// var net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))