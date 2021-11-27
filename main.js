import onWhatsappLoaded from './src/onWhatsappLoaded.js'
import Bot from './src/Bot.js';

onWhatsappLoaded(_ => {
    let bot = new Bot();
    bot.startBot();
});
