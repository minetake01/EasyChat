importScripts('./lib.js');

//ショートカット
chrome.commands.onCommand.addListener((command) => {
	if (command === 'EasyLiveChat') {
		windowCreate(windowOption);
	};
});

(function requestStreamDetail() {
	chrome.runtime.onConnect.addListener(function(port) {
		port.onMessage.addListener(function(message) {
			if (message.type === 'getStreamDetail') {
				getStreamDetail().then(function(contentArray) {
					console.log(contentArray);  //debug
					port.postMessage({contentArray: contentArray});
				});
			};
		});
	});
})();

function getStreamDetail() {
	return new Promise(resolve => {
		chrome.tabs.query({url: urls}, function(tabs) {
			let index = 0;
			let contentArray = [];
			tabs.forEach(function(tab){
				console.log('tab  ' + tab.url);    //debug
				let toGetterPort = chrome.tabs.connect(tab.id);
				toGetterPort.postMessage({getStreamDetail: 'ELCget'});
		
				toGetterPort.onMessage.addListener(function(response) {
					console.log('response  ' + response.getter_streamURL);  //debug
					if (response.getter_chatOK === true) {
						contentArray.push({
							platform: response.getter_platform,
							streamTitle: response.getter_streamTitle,
							streamURL: response.getter_streamURL
						});
					};
					index++
					if (index === tabs.length) {
						console.log('search success');  //debug
						resolve(contentArray);
					};
				});
			});
		});
	});
};