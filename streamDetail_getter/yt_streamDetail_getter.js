chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'youtube'
            let chatOK = !!$('#input', $('#chatframe')[0].contentWindow.document);
            let streamURL = location.href;
            let streamTitle = $('#container > h1 > yt-formatted-string').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});