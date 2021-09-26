chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'twitch'
            let chatOK = !!$('#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.channel-root.channel-root--watch-chat.channel-root--live.channel-root--watch.channel-root--unanimated > div.Layout-sc-nxg1ff-0.bXvPxk.channel-root__main--with-chat > div.channel-root__info.channel-root__info--with-chat > div > div.Layout-sc-nxg1ff-0.iSZTod > div > div > div > div.Layout-sc-nxg1ff-0.fkQgeT > div > div > div > a > div.Layout-sc-nxg1ff-0.ScHaloIndicator-sc-1l14b0i-1.bhRAfW.tw-halo__indicator > div > div').length;
            let streamURL = location.href;
            let streamTitle = $('#root > div > div.Layout-sc-nxg1ff-0.gnrDvI > div.Layout-sc-nxg1ff-0.iNmjIQ > main > div.root-scrollable.scrollable-area.scrollable-area--suppress-scroll-x > div.simplebar-scroll-content > div > div > div.channel-root.channel-root--watch-chat.channel-root--live.channel-root--watch.channel-root--unanimated > div.Layout-sc-nxg1ff-0.bXvPxk.channel-root__main--with-chat > div.channel-root__info.channel-root__info--with-chat > div > div.Layout-sc-nxg1ff-0.iSZTod > div > div > div > div.Layout-sc-nxg1ff-0.fFqLDv > div.Layout-sc-nxg1ff-0.koQvFy > div.Layout-sc-nxg1ff-0.kyQjBb > div > div.Layout-sc-nxg1ff-0.eVVTmn > h2').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});