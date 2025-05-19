
module.exports = {
  command: 'userinfo',
  description: 'Show your Telegram info',
  handler: (ctx) => {
    const user = ctx.from;
    const info = `
👤 *Your Info*

• Name: ${user.first_name} ${user.last_name || ''}
• Username: @${user.username || 'N/A'}
• ID: \`${user.id}\`
    `;
    ctx.reply(info.trim(), { parse_mode: 'Markdown' });
  }
};
