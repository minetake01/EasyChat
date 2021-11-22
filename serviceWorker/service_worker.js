importScripts('./lib.js');

//ショートカット
chrome.commands.onCommand.addListener((command) => {
	chrome.tabs.query({url: urls}, function(tabs) {
		if (command === 'EasyLiveChat' && tabs.length) {
			
			windowCreate(windowOption);
		};
	});
});

//配信情報リクエストに応答
(function requestStreamDetail() {
	chrome.runtime.onConnect.addListener(function(port) {
		port.onMessage.addListener(function(message) {
			if (message.type === 'getStreamDetail') {
				getStreamDetailPromise().then(function(contentArray) {
					console.log(contentArray);  //debug
					port.postMessage({contentArray: contentArray});
				});
			};
		});
	});
})();
