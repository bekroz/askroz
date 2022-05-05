const TelegramAPI = require('node-telegram-bot-api');
require('dotenv').config();

const BOT = new TelegramAPI(process.env.BOT_TOKEN, {
	polling: true,
});

let chatID;
BOT.on('message', (msg) => {
	const text = msg.text;
	chatID = msg.chat.id;
	if (text === '/start') {
		BOT.sendMessage(
			chatID,
			'Yahooo!!!!! ⚡️ \n\n AskRoz - powerful helper bot of BekRoz is now on your command. 😎 \n\n Direct contact: @bekroz'
		);
	}
	if (text === '/price') {
		BOT.sendMessage(
			chatID,
			'View all the prices of BekRoz in here: @bekroz_offer'
		);
	}

	if (text === '/blog') {
		BOT.sendMessage(chatID, '@seniortips - simple and powerful dev tips');
	}

	if (text === '/github') {
		BOT.sendMessage(chatID, 'github.com/bekroz - Public repos of BekRoz');
	}
	if (text === '/social') {
		BOT.sendMessage(
			chatID,
			`GitHub - github.com/bekroz,\n\nLinkedIn - linkedin.com/bekroz,\n\nStackOverFlow - stackoverflow.com/bekroz`
		);
	}

	if (text === '/help') {
		BOT.sendMessage(
			chatID,
			`Dear, ${msg.from.first_name} ${msg.from.last_name}\n Contact with my owner @bekroz!`
		);
	}
});
