chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = '0000studio'
            let chatOK = !!$('textarea:eq(1)').length;
            let streamURL = location.href;
            let streamTitle = $('span.truncate-1').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});