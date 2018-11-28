const http = require('http');
const Static = require('node-static');
const WebSocketServer = new require('ws');


const clients = {};

const Server = new WebSocketServer.Server({
    port:8081
});

Server.on('connection',function(ws){
    const id = Math.random();
    clients[id] = ws;
    console.log('Новое соединение ' + id);

    ws.on('message',function(message){
        console.log('Получено сообщение ' + message);
        for (let key in clients) {
            clients[key].send(message);
          };
    });
    ws.on('close',function() {
        console.log('connection closed' + clients.length);
        delete clients[id];
    })
})