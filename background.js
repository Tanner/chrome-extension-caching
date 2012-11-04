chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	sendResponse({message: "Received a message from background.js"});
});