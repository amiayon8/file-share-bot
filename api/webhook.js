const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Set up the Telegram bot with the token from the .env file
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

// Handle webhook for incoming updates from Telegram
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { body } = req;

    // Process incoming updates
    bot.processUpdate(body);

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
