chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'showroom'
            let chatOK = !!$('#js-chat-input-comment').length;
            let streamURL = location.href;
            let streamTitle = $('#room-header > div.room-header > div.room-header-user-info > h1').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});