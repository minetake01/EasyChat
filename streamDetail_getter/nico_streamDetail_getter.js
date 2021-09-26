chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'nicovideo'
            let chatOK = !!$('#root > div > div.___player-area___1IipP > div.___player-body-area___3W2NR > div > div > div.___player-display___1vZk7 > div.___player-display-footer___-aMrY > div > div.___comment-post-panel___153p6.___ga-ns-comment-post-panel___2Fh8_.___comment-post-panel___DHJYr > form > input[style!="user-select: none;"]').length;
            let streamURL = location.href;
            let streamTitle = $('#root > div > div.___program-information-area___2Wcf4 > div.___program-information-header-area___2AbSa > div > div.___primary-information-area___16K0E > h1 > span').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});