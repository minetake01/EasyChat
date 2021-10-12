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
		let contentArray = JSON.parse(message.contentArray);
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
			/*
			問い合わせ中

			最小使用サイズ20px
			色変更NG(黒or白のみOK)
			周囲三角形のサイズ分はクリア
			*/
			platformIcon = '<svg version="1.0" id="youtube" class="platform-icon" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 192 192" xml:space="preserve" height="24" width="24"><g id="XMLID_184_"><path id="XMLID_182_" d="M180.3 53.4c-2-7.6-8-13.6-15.6-15.7C151 34 96 34 96 34s-55 0-68.8 3.7c-7.6 2-13.5 8-15.6 15.7C8 67.2 8 96 8 96s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C41 158 96 158 96 158s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C184 124.8 184 96 184 96s0-28.8-3.7-42.6z" fill="red"/><polygon id="XMLID_1355_" points="78,122.2 124,96 78,69.8" fill="#fff"/></g></svg>';
			chatConsoleURL = 'https://www.youtube.com/live_chat?is_popout=1&v=' + streamURL + '&ELC=true';
			break;
		case 'nicovideo':
			/*
			ニコニ・コモンズから配布されている素材のみ利用可能。
			利用許可範囲はニコニ・コモンズ参照。
			*/
			platformIcon = '<svg version="1.0" id="nicovideo" class="platform-icon" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1280 800" xml:space="preserve" height="24" width="24"><style type="text/css">.st1{fill:#262626}</style><g><path d="M620.5 560.9h-66c-13.5 0-22.4-7.6-22.5-19.3-.1-12.2 8.3-20 22.3-20 41.5-.1 82.9-.4 124.4.1 15.8.2 27.1-6.2 35.7-18.8 18.5-27 18.1-69.8-1-95.6-8.1-10.9-18.4-16.8-32.7-16.7-41.8.4-83.6.2-125.4.1-11.1 0-19-4.7-22.2-12.9-5.3-13.6 4.6-27.6 20-27.8 17.5-.3 35 0 52.5-.2 1.9 0 5.6 1.8 5.5-1.7-.1-3.7 2.8-8.4-3.3-11-21.1-9.2-33.8-31-31.3-52.5 2.8-24.4 19.2-42.4 42.8-47 22.1-4.3 45.2 7.1 55.6 27.3 10.7 20.8 6.5 46.4-10.1 62-4.7 4.4-9.7 8.2-15.7 10.5-5.9 2.3-2.7 7.1-2.9 10.7-.2 3.7 3.5 1.8 5.4 1.8 13 .3 26.1-.6 38.9.7 26.5 2.6 45.5 17.5 59.2 39.5 12.2 19.5 17.3 41 17.5 64 .2 24.1-4.7 46.6-17.5 67.1-13.2 21.1-31.4 35.4-56.7 39.3-2.5.4-5 .5-7.5.5-21.7-.1-43.3-.1-65-.1zm8.1-291.1c-10.8 0-19.6 8.9-19.6 19.7 0 10.8 8.9 19.6 19.7 19.6 10.9 0 19.5-8.7 19.5-19.7s-8.6-19.6-19.6-19.6z" fill="#252525"/><path class="st1" d="M683 414.9c10.2.1 18.2 8.2 18.2 18.5 0 10.4-8.3 18.7-18.6 18.6-9.9-.1-18.3-8.6-18.4-18.6-.1-10.2 8.4-18.6 18.8-18.5zM585.1 450.4c-.1 10.1-8.4 18.4-18.4 18.4-10.1 0-18.7-8.7-18.6-18.9.1-10.1 8.4-18.3 18.5-18.3 10.4.1 18.6 8.4 18.5 18.8zM625.3 499.2h-18.5c-2.3 0-4.3-.3-5.4-2.7-1-2.3.2-3.8 1.6-5.4 5.9-6.6 11.7-13.2 17.8-19.6 3.2-3.4 6.3-3.4 9.4 0 6.1 6.6 12.1 13.3 18.1 20 1.3 1.4 2.1 3.1 1.3 5-.9 2.1-2.7 2.7-4.9 2.7-6.4-.1-12.9-.1-19.4 0z"/><path d="M628.6 269.8c10.9 0 19.6 8.6 19.6 19.6 0 11-8.6 19.7-19.5 19.7-10.8 0-19.7-8.8-19.7-19.6s8.8-19.6 19.6-19.7z" fill="#fefefe"/></g></svg>';
			chatConsoleURL = '../chatConsole/niconico/niconico.html?' + streamURL;
			break;
		case 'twitch':
			/*
			問い合わせ中
			
			色変更NG
			*/
			platformIcon = '<svg version="1.0" id="twitch" class="platform-icon" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 256 268" xml:space="preserve" height="24" width="24"><style type="text/css">.st0{fill:#5a3e85}</style><polygon class="st0" points="17.5,0 0,46.6 0,232.8 64,232.8 64,267.7 98.9,267.7 133.8,232.8 186.2,232.8 256,163 256,0"/><polygon points="40.7,23.3 232.7,23.3 232.7,151.3 192,192 128,192 93.1,226.9 93.1,192 40.7,192" fill="#fff"/><rect x="104.7" y="69.8" class="st0" width="23.3" height="69.8"/><rect x="168.7" y="69.8" class="st0" width="23.3" height="69.8"/></svg>';
			chatConsoleURL = '../chatConsole/twitch/twitch.html?' + streamURL;
			break;
		case 'showroom':
			/*
			UIをwebページの一つと捉えれば、ガイドライン
			「外部メディアやSNS媒体等におけるSHOWROOMサービスそのものの紹介」
			に当てはまる(?)

			最小使用サイズ22px
			*/
			platformIcon = '<img src="./assets/showroom-icon.png" id="showroom" class="platform-icon" height="24" width="24">';
			chatConsoleURL = '../chatConsole/showroom/showroom.html?' + streamURL;
			break;
		case 'openrec':
			/*
			問い合わせ中
			*/
			platformIcon = '<img src="./assets/openrec-icon.png" id="openrec" class="platform-icon" height="24" width="24">';
			chatConsoleURL = '../chatConsole/openrec/openrec.html?' + streamURL;
			break;
		case 'mildom':
			/*
			問い合わせ中
			*/
			platformIcon = '<img src="./assets/mildom-icon.png" id="mildom" class="platform-icon" height="24" width="24">';
			chatConsoleURL = '../chatConsole/mildom/mildom.html?' + streamURL;
			break;
		case 'twicas':
			platformIcon = '<img src="./assets/twicas-icon.png" id="twicas" class="platform-icon" height="24" width="24">';
			chatConsoleURL = '../chatConsole/twicas/twicas.html?' + streamURL;
			break;
		case '0000studio':
			platformIcon = '<img src="./assets/0000studio-icon.png" id="0000studio" class="platform-icon" height="24" width="24">';
			chatConsoleURL = '../chatConsole/0000studio/0000studio.html?' + streamURL;
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