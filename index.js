const TelegramAPI = require('node-telegram-bot-api');
require('dotenv').config();

const BOT = new TelegramAPI(process.env.BOT_TOKEN, {
	polling: true,
});

BOT.on('message', (msg) => {
	const text = msg.text;
	let chatID;
	chatID = msg.chat.id;
	if (text === '/start') {
		BOT.sendMessage(
			chatID,
			'Yahooo!!!!! ⚡️ \n\nAskRoz - powerful helper bot of BekRoz is now on your command. 😎 \n\n Direct contact: @bekroz\n\nCommands you can use:'
		);
	}
	if (text === '/price') {
		BOT.sendMessage(
			chatID,
			'@bekroz_offer - prices for projects and job offers'
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
			`GitHub - github.com/bekroz,\n\nLinkedIn - linkedin.com/bekroz,\n\nStackOverFlow - cutt.ly/bekroz`
		);
	}

	if (text === '/help') {
		BOT.sendMessage(
			chatID,
			`Dear, ${msg.from.first_name} ${msg.from.last_name}\n Contact with my owner @bekroz!`
		);
	}
});
