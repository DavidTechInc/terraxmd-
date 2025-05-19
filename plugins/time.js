module.exports = {
  command: 'time',
  description: 'Show current time',
  handler: (ctx) => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    ctx.reply(`⏰ Current Time: *${time}*`, { parse_mode: 'Markdown' });
  }
};
