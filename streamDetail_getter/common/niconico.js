let platform = 'niconico'
let chatOK = !$('.___overlay___3Nw78').length;
let streamURL = location.href;
let streamTitle = $('.___program-title___3pozg>span').html();
let channelName;
let channelID;
if ($('.___program-provider-type-label___3VgIC').length) {
	channelName = $('div.___channel-information-area___1kBok>a').html();
	channelID = $('div.___channel-information-area___1kBok>a').attr('href');
} else {
	channelName = $('.___user-name___DbpE9>[class=name]').html();
	channelID = $('.___user-name___DbpE9').attr('href');
};
let other
