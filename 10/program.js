const net = require('net');
const PORT = Number(process.argv[2]);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function time() { 
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let day = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  return year+'-'+zeroFill(month)+'-'+zeroFill(day)+' '+zeroFill(hour)+':'+zeroFill(minutes);
 }

const server = net.createServer( (socket) => {
    socket.end(time()+'\n');
});

server.listen(PORT)

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
