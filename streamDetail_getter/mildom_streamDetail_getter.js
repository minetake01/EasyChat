chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'mildom'
            let chatOK = !!$('#root > div > div > div.container > div.content > div.sc-nxikdd-0.jlgNbW > div.sc-ycw4tr-1.iODckN > div.sc-ycw4tr-4.gKodvm > div.sc-1fhicl-0.eTpVkM > textarea').length;
            let streamURL = location.href;
            let streamTitle = $('#root > div > div > div.container > div.content > div.sc-xb72g0-0.isTeNV > div.sc-1vx524e-0.eerJxF > div > div.sc-1vkzgbk-0.jKEABp > div.title').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});