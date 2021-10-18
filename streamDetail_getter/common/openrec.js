let platform = 'openrec'
let chatOK = !!$('input[class^="InputArea"]').length;  //配信終了後エラー
let streamURL = location.href;
let streamTitle = $('#root > div.skin-blue > div.Component__PageWrapper-sc-1jq7zwy-0.jOZboW.page-wrapper > div.Component__Wrapper-sc-5scu5e-0.kqvdgX > article > div.Component__MovieArticleBottom-sc-5scu5e-3.fxAVDa > section.Component__MovieTitleSection-sc-5scu5e-4.gpkTlD > div.MovieTitle__Wrapper-sc-jj8p17-0.eEjCtV > div.MovieTitle__Content-sc-jj8p17-1.bEKrXH > div.MovieTitle__Header-sc-jj8p17-14.cQGqBN > div > h1').html();
