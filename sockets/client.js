
const socket = new WebSocket("ws://wsc.2123.io");//wss

socket.binaryType = "arraybuffer";
//через typeof чекать строки
// socket.onopen = function(event){
//     const obj = { "token": "1390d72a4a2f861e", "command": "arithmetic"}
//     socket.send(JSON.stringify(obj));
// }
socket.onmessage = function(event){
    const incomingMessage = event.data;
    console.log(incomingMessage);
}