/*
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

chrome.commands.onCommand.addListener((command) => {
    if (command === 'easyChat') {
        chrome.windows.getAll({windowTypes: 'popup'}, function(windows) {
            console.log(windows)
        });
        chrome.windows.create({focused: true, top: 32, left: 32, type: 'panel', url: selectChannelURL});
    };
});
