module.exports = {
  command: 'hello',
  description: 'Replies with a greeting',
  handler: (ctx) => {
    ctx.reply('Hello from TerraXMD!');
  }
};