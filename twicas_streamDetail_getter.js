chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCet') {
            let streamID = 
            let channelID = 
            let ChannelName = 
            
            port.postMessage({
                getter_streamID: streamID,
                getter_channelID: channelID,
                getter_channelName: ChannelName
            });
        };
    });
});