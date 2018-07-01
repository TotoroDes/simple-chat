const chatForm = new ChatForm(document.forms[0]).render();
const chatHistory = new ChatHistory(document.querySelector('#chatHistory')).render();

chatHistory.listenChat();