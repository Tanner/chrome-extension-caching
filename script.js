chrome.extension.sendMessage({message: "Hello"}, function(response) {
	document.getElementById("message").innerHTML = response.message;
});

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("me").innerHTML = "This is a message from MY VERY PRETTY self.";
}, false );