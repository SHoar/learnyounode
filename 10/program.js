const PORT = process.argv[2];

const net = require('net');
let d = new Date();

let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDay();
let hour = d.getHours();
let minutes = d.getMinutes();


const server = net.createServer( (socket) => {
    socket.end(listener(socket) => {
        time = `{year}-{month}-{day} {hour}:{minutes}`
        // YYYY-MM-DD HH:MM 
        return time;
    });
});
server.listen(PORT)