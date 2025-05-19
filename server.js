require('dotenv').config();
const express = require('express');
const bot = require('./core/bot');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('TerraXMD Bot is running. By Crazy Tech Inc.');
});

// coded by mom
bot.launch().then(() => {
  console.log('>> TerraXMD Bot is online!');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});