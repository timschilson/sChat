const socket = io();

while(!username){
    var username = prompt('What is your name?');
};

appendMessage('You joined');
socket.emit('new-user', username);

socket.on('init', results => {
    results.forEach(result => {
        appendMessage(`${result.username}: ${result.message}`);
    });
});

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
});
  
socket.on('user-connected', name => {
    appendMessage(`${name} connected`);
});
  
socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
        appendMessage(`You: ${input.value}`);
        socket.emit('send-chat-message', input.value);
        input.value = '';
    }
});

function appendMessage(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}