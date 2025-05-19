const axios = require('axios');

module.exports = {
  command: 'couplepp',
  description: 'Generate a random couple photo (boy + girl)',
  handler: async (ctx) => {
    try {
      const res = await axios.get('https://apis.davidcyriltech.my.id/couplepp');
      const { boy, girl } = res.data;

      await ctx.replyWithPhoto({ url: girl }, { caption: '👩 Girl Profile' });
      await ctx.replyWithPhoto({ url: boy }, { caption: '👨 Boy Profile' });

      await ctx.reply('💑 *Random Couple Generated!*', { parse_mode: 'Markdown' });
    } catch (err) {
      console.error(err);
      ctx.reply('❌ Failed to fetch couple photo. Try again later.');
    }
  }
};
