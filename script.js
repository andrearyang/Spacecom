const ws = new WebSocket('ws://127.0.0.1:8000/ws');
const messages = document.getElementById('messages');
const input = document.getElementById('input');
ws.onmessage = (event) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = event.data;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
};
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value) {
        ws.send(input.value);
        input.value = '';
    }
})