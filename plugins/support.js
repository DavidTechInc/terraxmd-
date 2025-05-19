
module.exports = (bot) => {
  bot.command('support', async (ctx) => {
    ctx.reply('🛠️ *Need help or updates?* Join our official support channel:', {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: '📢 WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C' }]
        ]
      }
    });
  });
};
