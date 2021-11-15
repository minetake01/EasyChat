//チャットの連投を制限
function spamBlock() {
	clicktime += 1
	if (clicktime == 1) {
		setTimeout(function(){clicktime = 0}, 60000);
	} else if (clicktime >= 6) {
		$('#clickBlocker').prop('hidden', false);
        document.addEventListener('keydown', eventBlock, {passive: false});
		setTimeout(function(){
            $('#clickBlocker').prop('hidden', true);
            document.removeEventListener('keydown', eventBlock, {passive: false});
        }, 60000);
	};
};
function eventBlock(event) {
    event.preventDefault();
};