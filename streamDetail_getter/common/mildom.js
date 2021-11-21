chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other

            port.postMessage({
                getter_chatOK: !!$('textarea.chat-panel-input').length,
                getter_platform: 'mildom',
                getter_streamURL: location.href,
                getter_streamTitle: $('.right .title').html(),
                getter_channelName: $('.right .name').html(),
                getter_channelID: $('.right .name').attr('href').replace('/profile/', ''),
                getter_other: other
            });
        };
    });
});