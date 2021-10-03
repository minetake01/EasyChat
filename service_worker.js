const selectChannelURL = chrome.runtime.getURL('selectChannel/selectChannel.html');
const urls = [
    'https://www.youtube.com/watch*',
    'https://live.nicovideo.jp/watch*',
    'https://www.twitch.tv/*',
    'https://www.showroom-live.com/*',
    'https://www.openrec.tv/live*',
    'https://www.mildom.com/*',
    'https://twitcasting.tv/*',
    'https://0000.studio/*'
];
//チャンネル選択ウィンドウの初期状態
const windowOption = {
    focused: true,
    top: 32,
    left: 32,
    type: 'panel',
    height: 200,
    width: 500,
    url: selectChannelURL
};

let windowID = -1;

(function windowCreate() {
    chrome.commands.onCommand.addListener((command) => {
        if (command === 'EasyLiveChat') {
            //開かれているウィンドウを取得
            chrome.windows.get(windowID, function(window) {
                if (!chrome.runtime.lastError && window) {
                    //すでに開かれていればフォーカス
                    chrome.windows.update(windowID, {focused: true});
                } else {
                    //開かれていなければ作成
                    chrome.windows.create(windowOption, function(window) {
                        //ウィンドウを使いまわしするためにID保持
                        windowID = window.id;
                    });
                };
            });
        };
    });
})();

(function requestStreamDetail() {
    chrome.runtime.onConnect.addListener(function(port) {
        port.onMessage.addListener(function(message) {
            if (message.type === 'getStreamDetail') {
                getStreamDetail().then(function(contentArray) {
                    let contentJSON = JSON.stringify(contentArray);
                    console.log(contentArray)
                    console.log(contentJSON)
                    port.postMessage({contentArray: contentJSON});
                });
            };
        });
    });
})();

function getStreamDetail() {
    return new Promise(resolve => {
        chrome.tabs.query({url: urls}, function(tabs) {
            let chatOKCount = 0;
            let contentArray = [];
            tabs.forEach(function(tab, index){
                let toGetterPort = chrome.tabs.connect(tab.id);
                toGetterPort.postMessage({getStreamDetail: 'ELCget'});
        
                toGetterPort.onMessage.addListener(function(response) {
                    if (response.getter_chatOK === true) {
                        contentArray.push([response.getter_platform, response.getter_streamTitle, response.getter_streamURL]);
                        chatOKCount++
                    };
                });
                if (index === tabs.length-1) {
                    resolve(contentArray);
                };
            });
        });
    });
};