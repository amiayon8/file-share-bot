const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Initialize the bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

// Define command handlers
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome! I am your bot.');
});

// Add more command handlers as needed
