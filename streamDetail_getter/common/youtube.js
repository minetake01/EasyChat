let chatOK = !!$('#columns iframe[src!="about:blank"]').length;
let platform = 'youtube'
let streamURL = location.search.replace('?v=', '');
let streamTitle = $('#movie_player > div.ytp-chrome-top > div.ytp-title > div > a').html();
let channelName
let channelID
let other
