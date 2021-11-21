let platform = 'twitch'
let chatOK;
let streamURL = location.href;
let streamTitle;
let channelName;
let channelID;
let other;

const target = document.getElementsByClassName('logged-in')[0];
const observer = new MutationObserver(() => {
	if (!!$('.chat-input__textarea textarea').length) {
		chatOK = !!$('.chat-input__textarea textarea').length;
		streamTitle = $('h2[data-a-target="stream-title"]').html();
		channelName = $('[href="' + location.pathname + '"] > h1').html();
		channelID = location.href;
		other
	};
});
observer.observe(target, {childList: true});