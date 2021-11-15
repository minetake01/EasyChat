//配信の詳細を取得するURLリスト
const urls = [
	'https://www.youtube.com/watch*',
	'https://live.nicovideo.jp/watch*',
	'https://www.twitch.tv/*',
	'https://www.showroom-live.com/*',
	'https://www.openrec.tv/live*',
	'https://www.mildom.com/*',
	'https://twitcasting.tv/*'
];
//チャンネル選択ウィンドウの初期状態
const windowOption = {
	focused: true,
	top: 32,
	left: 32,
	type: 'panel',
	height: 200,
	width: 500,
	url: './selectChannel/selectChannel.html'
};

//ウィンドウID保持
let windowID = -1;

//ウィンドウ作成
function windowCreate(option) {
	//開かれているウィンドウを取得
	chrome.windows.get(windowID, function(window) {
		if (!chrome.runtime.lastError && window) {
			//すでに開かれていればフォーカス
			chrome.windows.update(windowID, {focused: true});
		} else {
			//開かれていなければ作成
			chrome.windows.create(option, function(window) {
				//ウィンドウを使いまわしするためにID保持
				windowID = window.id;
			});
		};
	});
};

//配信ページと通信して取得した詳細情報を配列(Promise)で返す
function getStreamDetailPromise() {
	return new Promise(resolve => {
		chrome.tabs.query({url: urls}, function(tabs) {
			let index = 0;
			let contentArray = [];
			tabs.forEach(function(tab){
				console.log('tab  ' + tab.url);    //debug
				let toGetterPort = chrome.tabs.connect(tab.id);
				toGetterPort.postMessage({getStreamDetail: 'ELCget'});
		
				toGetterPort.onMessage.addListener(function(response) {
					console.log('response	 ' + response.getter_platform +"\n"+
								'chatOK		 ' + response.getter_chatOK +"\n"+
								'streamURL	 ' + response.getter_streamURL +"\n"+
								'streamTitle ' + response.getter_streamTitle +"\n"+
								'channelName ' + response.getter_channelName +"\n"+
								'channelID	 ' + response.getter_channelID +"\n"+
								'other		 ' + response.getter_other);  //debug

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