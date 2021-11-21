chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
			let other

            port.postMessage({
                getter_chatOK: !!$('#columns iframe[src!="about:blank"]').length,
                getter_platform: 'youtube',
                getter_streamURL: location.search.replace('?v=', ''),
                getter_streamTitle: $('#movie_player > div.ytp-chrome-top > div.ytp-title > div > a').html(),
                getter_channelName: $('yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string').html(),
                getter_channelID: $('yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string').attr('href').replace('/channel/', ''),
                getter_other: other
            });
        };
    });
});