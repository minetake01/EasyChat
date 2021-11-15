//チャットが送信された時に実行
function onSentChat() {
	//連投防止
	spamBlock();

	//チャット要素を取得
	chatElement = $('dev#input').html();
};

//データを更新
function updateData() {
	chrome.storage.local.get({LCS_youtube: {}}, function(value) {
		let historyChatDataArray = value.historyChatDataArray;
		let channelChatDataArray = value.channelChatDataArray;
		let globalChatDataArray = value.globalChatDataArray;
	});
};