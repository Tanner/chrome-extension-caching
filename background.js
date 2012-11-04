chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	sendResponse({message: "NEW MESSAGE - Received a message from background.js"});
});