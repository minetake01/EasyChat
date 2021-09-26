chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
            let platform = 'openrec'
            let chatOK = !!$('#root > div.skin-blue > div.Component__PageWrapper-sc-1jq7zwy-0.jOZboW.page-wrapper > div.Component__Wrapper-sc-5scu5e-0.kqvdgX > article > aside > div > div.ChatArticle__Content-sc-ko5rza-2.fBpbJN > div > div.ChatArticle__InputAreaWrapper-sc-ko5rza-6.fsvHsl.chat-input-area > div > div.InputArea__InputWrapper-sc-1b3cl0z-1.buwrgx > input').length;
            let streamURL = location.href;
            let streamTitle = $('#root > div.skin-blue > div.Component__PageWrapper-sc-1jq7zwy-0.jOZboW.page-wrapper > div.Component__Wrapper-sc-5scu5e-0.kqvdgX > article > div.Component__MovieArticleBottom-sc-5scu5e-3.fxAVDa > section.Component__MovieTitleSection-sc-5scu5e-4.gpkTlD > div.MovieTitle__Wrapper-sc-jj8p17-0.eEjCtV > div.MovieTitle__Content-sc-jj8p17-1.bEKrXH > div.MovieTitle__Header-sc-jj8p17-14.cQGqBN > div > h1').html();
            
            port.postMessage({
                getter_platform: platform,
                getter_chatOK: chatOK,
                getter_streamURL: streamURL,
                getter_streamTitle: streamTitle
            });
        };
    });
});