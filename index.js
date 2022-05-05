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
			`Yahooo!!!!! ⚡️ \n\nAskRoz - powerful helper is now on your command. 😎 \n\nDirect contact: @bekroz\n\nCommands you can use right now:\n
			/start => To give life to AskRoz

			/blog => To get list of blogs

			/tip => To suggest tip from ST channel (Not working yet)

			/social => To get list of social links

			/price => To get price channel.

			/stop => To kill AskRoz.
			`
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

	if (text === '/stop') {
		BOT.sendMessage(chatID, `Do you really want to kill me? 🥹`);
	}

	if (text === '/kill') {
		BOT.sendMessage(chatID, `Do you really want to kill me? 🥹`);
	}
});
