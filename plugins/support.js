
module.exports = {
  command: 'support',
  description: 'Get the official support channel link',
  handler: (bot) => {
    bot.command('support', async (ctx) => {
      ctx.reply('🛠️ *Need help or updates?* Join our official WhatsApp Channel below:', {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [{ text: '📢 Join Support Channel', url: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C' }]
          ]
        }
      });
    });
  }
};
