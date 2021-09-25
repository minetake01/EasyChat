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
                    url: selectChannelURL
                }, function(window) {
                    windowID = window.id;
                });
            };
        });
    };
});

console.log(screen.availHeight)
console.log(screen.availWidth)