const language = (window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage;

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

    chrome.runtime.onConnect.addListener(function(port) {
        port.onMessage.addListener(function(request) {
            if (request.type === 'appendContent') {
                console.log(request);
            };
            return true;
        });
    });
});