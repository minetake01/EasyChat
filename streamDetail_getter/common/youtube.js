let platform = 'youtube'
let chatOK = !!$('#columns iframe[src!="about:blank"]');
let streamURL = location.search.replace('?v=', '');
let streamTitle = $('#movie_player > div.ytp-chrome-top > div.ytp-title > div > a').html();
let channelName = $('yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string').html();
let channelID = $('yt-formatted-string[has-link-only_]:not([force-default-style]) a.yt-simple-endpoint.yt-formatted-string').attr('href').replace('/channel/', '');
let other
