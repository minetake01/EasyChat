const language = (window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage;

function contentElement(title, platform) {
    let platformIcon;
    switch (platform) {
        case 'youtube':

        break;
        case 'nicovideo':

        break;
        case 'twitch':

        break;
        case 'showroom':

        break;
        case 'openrec':

        break;
        case 'mildom':

        break;
        case 'twicas':

        break;
        case '0000studio':

        break;
    };
    return (function(param) {return param[0].replace(/\n|\r/g, "");})`
        <div id="content" class="easy-live-chat-content">
            ` + platformIcon + `
            <div id="content-title" class="easy-live-chat-content">` + title + `</div>
        </div>
    `;
};

$(window).on('load', function() {
    (function lang() {
        switch (language) {
            case 'ja':
                $('.lang[lang!="ja"]').prop('hidden', true);
                $('.lang[lang="ja"]').prop('hidden', false);
            break;
            default:
                $('.lang[lang!="en"]').prop('hidden', true);
                $('.lang[lang="en"]').prop('hidden', false);
            break;
        };
    })();

    let port = chrome.runtime.connect();
    port.postMessage({type: 'getStreamDetail'});
    port.onMessage.addListener(function(contentArray) {
        console.log(contentArray)
        contentArray.forEach(function(content) {
            console.log(content)
            console.log(content[0])
            console.log(content[1])
            console.log(content[2])
        });
        //$('#contents.easy-live-chat').append(contentElement())
    });
});