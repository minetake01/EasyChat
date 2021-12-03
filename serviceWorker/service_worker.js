importScripts('./lib.js');

let streamDetailArray;

//ショートカット
chrome.commands.onCommand.addListener((command) => {
	getStreamDetailPromise().then(function(array) {
		streamDetailArray = array;
		console.log(streamDetailArray);  //debug

		if (command === 'EasyLiveChat') {
			windowCreate(selectChannelWinOpt(streamDetailArray));
		};
	});
});

//配信情報リクエストに応答
(function requestStreamDetail() {
	chrome.runtime.onConnect.addListener(function(port) {
		port.onMessage.addListener(function(message) {
			if (message.type === 'getStreamDetail') {
				port.postMessage({contentArray: streamDetailArray});
			};
		});
	});
})();
