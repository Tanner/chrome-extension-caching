chrome.extension.sendMessage({message: "Hello"}, function(response) {
	document.getElementById("message").innerHTML = response.message;
});