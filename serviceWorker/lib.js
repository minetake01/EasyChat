//配信の詳細を取得するURLリスト
const urls = [
	'https://www.youtube.com/watch*',
	'https://live.nicovideo.jp/watch*',
	'https://www.twitch.tv/*',
	'https://www.showroom-live.com/*',
	'https://www.openrec.tv/live*',
	'https://www.mildom.com/*',
	'https://twitcasting.tv/*',
	'https://0000.studio/*'
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