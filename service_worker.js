/*
対応予定の配信サービス
YouTube Live
ニコ生
SHOWROOM
Twitch
OPENREC.tv
mildom
ツイキャス
00:00 Studio
*/

const selectChannelURL = chrome.runtime.getURL('selectChannel/selectChannel.html');

let windowID = -1;

chrome.commands.onCommand.addListener((command) => {
    if (command === 'EasyLiveChat') {
        chrome.windows.get(windowID, function(window) {
            if (!chrome.runtime.lastError && window) {
                chrome.windows.update(windowID, {focused: true});
            } else {
                chrome.windows.create({
                    focused: true,
                    top: 32,
                    left: 32,
                    type: 'panel',
                    height: 200,
                    width: 500,
                    url: selectChannelURL
                }, function(window) {
                    windowID = window.id;
                    
                    chrome.tabs.query({url: '<all_urls>'}, function(tabs) {
                        tabs.forEach(function(tab){
                            let toGetterPort = chrome.tabs.connect(tab.id);
                            toGetterPort.postMessage({getStreamDetail: 'ELCget'});
                    
                            toGetterPort.onMessage.addListener(function(response) {
                                console.log(response);
                            });
                        });
                    });
                });
            };
        });
    };
});
