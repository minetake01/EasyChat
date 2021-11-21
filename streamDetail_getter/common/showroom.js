chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other

            port.postMessage({
                getter_chatOK: !!$('#js-chat-input-comment').length,
                getter_platform: 'showroom',
                getter_streamURL: location.href,
                getter_streamTitle: $('#room-header h1').html(),
                getter_channelName: $('#room-header h1').html(),
                getter_channelID: location.pathname.replace('/', ''),
                getter_other: other
            });
        };
    });
});