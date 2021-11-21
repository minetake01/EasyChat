chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other;

            port.postMessage({
                getter_chatOK: !!$('.chat-input__textarea textarea').length,
                getter_platform: 'twitch',
                getter_streamURL: location.href,
                getter_streamTitle: $('h2[data-a-target="stream-title"]').html(),
                getter_channelName: $('[href="' + location.pathname + '"] > h1').html(),
                getter_channelID: location.pathname.replace('/', ''),
                getter_other: other
            });
        };
    });
});