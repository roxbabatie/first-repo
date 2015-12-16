var chat = document.getElementById("chat-window");
var form = document.getElementById("form");
var message = document.getElementById("message");
var send = document.getElementById("btn");
var contentMsg,
var	newMsg;

form.addEventListener("submit", function(event) {
	event.preventDefault();

	//get message
	contentMsg = message.value.trim();

	// Validate message
	if (contentMsg.length != 0) {
		// Create new p element
			newMsg = document.createElement("div");
			newMsg.className = "box";
		// Add text to new element
			newMsg.innerHTML = '<img id="avatar" src = "img/avatar.png" />' + contentMsg + '<p id= "name">John Doe</p>';
		// Append new element to chat container
			chat.appendChild(newMsg);
	} 
	else {
		// Alert error
		console.log('Error');
	};
	chat.scrollTop = 10000;
	message.value=" ";
	message.focus();
});
