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

                    chrome.tabs.query({
                        url: [
                            'https://www.youtube.com/watch*',
                            'https://live.nicovideo.jp/watch*',
                            'https://www.twitch.tv/*',
                            'https://www.showroom-live.com/*',
                            'https://www.openrec.tv/live*',
                            'https://www.mildom.com/*',
                            'https://twitcasting.tv/*',
                            'https://0000.studio/*'
                        ]
                    }, function(tabs) {
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
