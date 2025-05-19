const { Telegraf, Markup } = require('telegraf');
const fs = require('fs');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Load plugins (commands)
const pluginsDir = './plugins';
fs.readdirSync(pluginsDir).forEach(file => {
  const plugin = require(`../plugins/${file}`);
  if (plugin.command && plugin.handler) {
    bot.command(plugin.command, plugin.handler);
    console.log(`Loaded command: /${plugin.command}`);
  }
});

// Start message with main menu
bot.start((ctx) => {
  ctx.reply(
    '▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔\nWelcome to TerraXMD Bot\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\nSelect an option below to begin:',
    Markup.keyboard([
      ['🛠 Commands', 'ℹ️ About'],
      ['❌ Exit']
    ])
    .resize()
    .oneTime()
  );
});

// Menu actions
bot.hears('🛠 Commands', (ctx) => {
  let commands = '';
  const files = fs.readdirSync(pluginsDir);
  files.forEach(file => {
    const plugin = require(`../plugins/${file}`);
    commands += `• /${plugin.command} - ${plugin.description || 'No description'}\n`;
  });

  ctx.reply(`Available Commands:\n\n${commands}`);
});

bot.hears('ℹ️ About', (ctx) => {
  ctx.reply(
    'TerraXMD is a modular Telegram bot with plugin support.\n\nCreated by Crazy Tech Inc.'
  );
});

bot.hears('❌ Exit', (ctx) => {
  ctx.reply('Menu closed. You can type /start to reopen.');
});

module.exports = bot;