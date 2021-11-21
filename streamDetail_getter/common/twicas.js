chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other

            port.postMessage({
                getter_chatOK: !!$('form.tw-comment-post > textarea').length,
                getter_platform: 'twicas',
                getter_streamURL: location.href,
                getter_streamTitle: $('.tw-user-nav-name').html(),
                getter_channelName: $('.tw-user-nav-name').html(),
                getter_channelID: location.pathname.replace('/', ''),
                getter_other: other
            });
        };
    });
});