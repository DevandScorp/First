
const socket = new WebSocket("ws://localhost:8081");

document.forms.publish.onsubmit = function(){
    const message = this.message.value;

    socket.send(message);
    return false;
}

socket.onmessage = function(event){
    const incomingMessage = event.data;
    showMessage(incomingMessage);
}
function showMessage(message){
    const messageElement = document.createElement('div');
    messageElement.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElement);
}