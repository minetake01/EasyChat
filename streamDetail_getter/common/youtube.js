chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'youtube'
            let chatOK = !!$('#columns iframe[src!="about:blank"]').length;
            let streamURL = location.search.replace('?v=', '');
            let streamTitle = $('#movie_player > div.ytp-chrome-top > div.ytp-title > div > a').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});
