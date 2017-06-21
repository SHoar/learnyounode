const net = require('net')
const server = net.createServer((socket) => {
// socket handling logic
    socket.write(date.getFullYear());
    socket.end();
})
server.listen(8000)