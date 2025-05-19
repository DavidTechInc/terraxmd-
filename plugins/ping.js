module.exports = {
  command: 'ping',
  description: 'Check bot latency with style',
  handler: async (ctx) => {
    const start = Date.now();

    const sent = await ctx.reply('⏳ Measuring response...');

    const latency = Date.now() - start;

    // Stylish response
    const message = [
      '🏓 *TerraXMD Ping Result*',
      '',
      `• *Status:* Online`,
      `• *Latency:* \`${latency} ms\``,
      '',
      '_Powered by Crazy Tech Inc_'
    ].join('\n');

    ctx.telegram.editMessageText(
      sent.chat.id,
      sent.message_id,
      null,
      message,
      { parse_mode: 'Markdown' }
    );
  }
};