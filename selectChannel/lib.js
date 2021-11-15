const language = (window.navigator.languages && window.navigator.languages[0]) ||
			window.navigator.language ||
			window.navigator.userLanguage ||
			window.navigator.browserLanguage;

function lang() {
	switch (language) {
		case 'ja':
			$('.lang[lang!="ja"]').prop('hidden', true);
			$('.lang[lang="ja"]').prop('hidden', false);
		break;
		default:
			$('.lang[lang!="en"]').prop('hidden', true);
			$('.lang[lang="en"]').prop('hidden', false);
		break;
	};
};

//配信一覧更新
function updateContent() {
	let port = chrome.runtime.connect();
	port.postMessage({type: 'getStreamDetail'});
	port.onMessage.addListener(function(message) {
		let contentArray = message.contentArray;
		$('#contents').empty();
		contentArray.forEach(function(value) {
			$('#contents').append(contentElement(value.streamTitle, value.platform, value.streamURL))
		});
		return;
	});
};

//配信一覧の要素生成
function contentElement(title, platform, streamURL) {
	let platformIcon;
	let chatConsoleURL;
	switch (platform) {
		case 'youtube':
			platformIcon = '<img id="youtube" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://www.youtube.com/">';
			chatConsoleURL = 'https://www.youtube.com/live_chat?is_popout=1&v=' + streamURL + '&ELC=true';
			break;
		case 'niconico':
			platformIcon = '<img id="niconico" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://live.nicovideo.jp/">';
			chatConsoleURL = '../chatConsole/niconico/niconico.html?' + streamURL;
			break;
		case 'twitch':
			platformIcon = '<img id="twitch" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://www.twitch.tv/">';
			chatConsoleURL = '../chatConsole/twitch/twitch.html?' + streamURL;
			break;
		case 'showroom':
			platformIcon = '<img id="showroom" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://www.showroom-live.com/">';
			chatConsoleURL = '../chatConsole/showroom/showroom.html?' + streamURL;
			break;
		case 'openrec':
			platformIcon = '<img id="openrec" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://www.openrec.tv/">';
			chatConsoleURL = '../chatConsole/openrec/openrec.html?' + streamURL;
			break;
		case 'mildom':
			platformIcon = '<img id="mildom" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://www.mildom.com/">';
			chatConsoleURL = '../chatConsole/mildom/mildom.html?' + streamURL;
			break;
		case 'twicas':
			platformIcon = '<img id="twicas" class="platform-icon" src="http://www.google.com/s2/favicons?domain=https://twitcasting.tv/">';
			chatConsoleURL = '../chatConsole/twicas/twicas.html?' + streamURL;
			break;
	};
	return (function(param) {return param[0].replace(/\n|\r/g, "");})`
		<div id="content" class="easy-live-chat-content" platform="` + platform + `">
			` + platformIcon + `
			<div id="content-title" class="easy-live-chat-content">` + title + `</div>
			<a href="` + chatConsoleURL + `"></a>
		</div>
	`;
};