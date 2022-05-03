const TelegramAPI = require('node-telegram-bot-api');

const ASKROZ_BOT_TOKEN = '5148840632:AAF5DTiT1zkWokEDTBhsHGdrbynNzAkOhTQ';

const BOT = new TelegramAPI(ASKROZ_BOT_TOKEN, { polling: true });

export default BOT;
