import BOT from '../data/bot';
import { COMMAND_OPTIONS, COMMAND_DESCRIPTIONS } from '../data';

const setBotCommands = async () => {
	return await BOT.setMyCommands([
		{
			command: COMMAND_OPTIONS.start,
			description: COMMAND_DESCRIPTIONS.start,
		},
		{
			command: COMMAND_OPTIONS.help,
			description: COMMAND_DESCRIPTIONS.help,
		},
		{
			command: COMMAND_OPTIONS.stop,
			description: COMMAND_DESCRIPTIONS.stop,
		},
	]);
};

export default setBotCommands;
