chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'twicas'
            let chatOK = !!$('#comment-list-app > form > textarea').length;
            let streamURL = location.href;
            let streamTitle = $('#mainwrapper > div.tw-user-header > nav > div > div > div > div > span').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});