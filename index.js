const TelegramAPI = require('node-telegram-bot-api');

const token = 'TOKEN_HERE';

const bot = new TelegramAPI(token, { polling: true });

let chatID;
bot.on('message', (msg) => {
	const text = msg.text;
	chatID = msg.chat.id;
	if (text === '/start') {
		bot.sendMessage(
			chatID,
			'Welcome to a responder bot of BekRoz. \n You can use following commands \n: /price, "'
		);
	}
	if (text === '/price') {
		bot.sendMessage(
			chatID,
			'View all the prices of BekRoz in here: @bekroz_offer'
		);
	}

	if (text === '/help') {
		bot.sendMessage(
			chatID,
			`Dear, ${msg.from.first_name} ${msg.from.last_name}\n You can use following commands \n: /price, /help`
		);
	}
});
