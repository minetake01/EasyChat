chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCet') {
            if (!$('#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-time-display.notranslate.ytp-live > button').length) {
                let streamID = location.search.replace('?v=', '');
                let channelID = $('#text > a.yt-simple-endpoint.style-scope.yt-formatted-string').attr('href').replace('/channel/', '');
                let ChannelName = $('#text.ytd-channel-name > a').html();
                
                port.postMessage({
                    getter_streamID: streamID,
                    getter_channelID: channelID,
                    getter_channelName: ChannelName
                });
            };
        };
    });
});