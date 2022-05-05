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
			/start => Give life to AskRoz

			/blog => Get list of blogs

			/tip => Random tip from SeniorTips

			/social => Get list of social links

			/work => Get portfolio channel

			/price => Get price channel
			
			/source => Get source-code for AskRoz.

			/stop => Kill AskRoz.
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

	if (text === '/tip') {
		const randomTipNum = Math.floor(Math.random() * 388);
		BOT.sendMessage(
			chatID,
			`Tips are in BETA. Enjoy random tip from SeniorTips: \n\n
			https://t.me/seniortips/${randomTipNum}`
		);
	}

	if (text === '/work' || text === '/portfolio') {
		BOT.sendMessage(chatID, '@bekroz_work - See what BekRoz is doing now');
	}

	if (text === '/stop' || text === '/kill') {
		BOT.sendMessage(chatID, `Do you really want to kill me? 🥹`);
	}

	if (text === '/source') {
		BOT.sendMessage(
			chatID,
			`Here you are, buddy: \n\n 👉 github.com/bekroz/askrozbot`
		);
	}
});
