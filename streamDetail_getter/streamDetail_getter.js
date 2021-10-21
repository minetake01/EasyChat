chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            port.postMessage({
                getter_chatOK: chatOK,
                getter_platform: platform,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle,
                getter_channelName: channelName,
                getter_channelID: channelID,
                getter_other: other
            });
        };
    });
});