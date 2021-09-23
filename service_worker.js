const selectChannelURL = chrome.runtime.getURL('selectChannel.html');

chrome.commands.onCommand.addListener((command) => {
    if (command === 'easyChat') {
        chrome.windows.create({focused: true, top: 32, left: 32, type: 'panel', url: 'https://www.youtube.com/live_chat?is_popout=1&v=2x-MUm7hl3M'})
    };
});
