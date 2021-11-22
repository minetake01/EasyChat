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
		if (contentArray.length === 1) {
			if (contentArray[0].platform === 'youtube') {
				location.href = 'https://www.youtube.com/live_chat?is_popout=1&v=' + contentArray[0].streamURL + '&ELC=true&title=' + contentArray[0].streamTitle;
			} else {
				location.href = '../chatConsole/' + contentArray[0].platform + '/' + contentArray[0].platform + '.html?streamURL=' + contentArray[0].streamURL + '&title=' + contentArray[0].streamTitle;
			};
		};
		contentArray.forEach(function(value) {
			$('#contents').append(contentElement(value.streamTitle, value.platform, value.streamURL));
		});
		return;
	});
};

//配信一覧の要素生成
function contentElement(title, platform, streamURL) {
	let platformIconURL;
	let chatConsoleURL;
	if (platform === 'youtube') {
		platformIconURL = 'https://www.youtube.com/';
		chatConsoleURL = 'https://www.youtube.com/live_chat?is_popout=1&v=' + streamURL + '&ELC=true&title=' + title;
	} else {
		platformIconURL = streamURL;
		chatConsoleURL = '../chatConsole/' + platform + '/' + platform + '.html?streamURL=' + streamURL + '&title=' + title;
	};
	return (function(param) {return param[0].replace(/\n|\r/g, "");})`
		<div id="content" class="easy-live-chat-content" platform="` + platform + `">
			<img id="` + platform + `" class="platform-icon" src="http://www.google.com/s2/favicons?domain=` + platformIconURL + `">
			<div id="content-title" class="easy-live-chat-content">` + title + `</div>
			<a href="` + chatConsoleURL + `"></a>
		</div>
	`;
};