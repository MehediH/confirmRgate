chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		window.onbeforeunload = function(){
			return 'Are you sure you want to leave?';
		};
	}
	}, 10);
});