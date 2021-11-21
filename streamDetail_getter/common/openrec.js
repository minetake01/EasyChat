chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other

            port.postMessage({
                getter_chatOK: !!$('aside input').length,
                getter_platform: 'openrec',
                getter_streamURL: location.href,
                getter_streamTitle: $('article h1').html(),
                getter_channelName: $('article span.text-ellipsis').html(),
                getter_channelID: $('article a.text-hover').attr('href').replace('/user/', ''),
                getter_other: other
            });
        };
    });
});