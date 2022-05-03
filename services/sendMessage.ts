import { BOT } from '../data';

const sendMessage = async (message: string, options) => {
	return await BOT.sendMessage(message, options);
};

export default sendMessage;
