chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(request) {
        if (request.getStreamDetail === 'ELCget') {
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
			
            port.postMessage({
                getter_chatOK: !$('.___overlay___3Nw78').length,
                getter_platform: 'niconico',
                getter_streamURL: location.href,
                getter_streamTitle: $('.___program-title___3pozg>span').html(),
                getter_channelName: channelName,
                getter_channelID: channelID,
                getter_other: other
            });
        };
    });
});