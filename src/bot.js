const path = require('path');

const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../.env') })

const fs = require('fs');
const ALTERNATE_AND_SIMILAR_NAMES = require('./alternateNames');

const { Client } = require('discord.js');

const client = new Client();
const COUNTERPREFIX = '-counter';

const transformSingleQuotesToDoubleQuotes = (text) => {
  return text.replace(/'/g, '"');
};

const getCounters = () => {
  const data = fs.readFileSync(path.resolve(__dirname, '../countersByHero.txt'), 'utf8');
  return JSON.parse(transformSingleQuotesToDoubleQuotes(data));
}

const getCountersByHeroFromMessage = (heroFromMessage) => {
  const heroToSearch = ALTERNATE_AND_SIMILAR_NAMES[heroFromMessage];
  const heroWithCounters = getCounters();
  let message = 'Hero não encontrado.';

  const hero = heroWithCounters.find(hero => hero.name === heroToSearch);

  if (hero) {
    message = `\n Os counters do hero ${heroToSearch.toUpperCase()} são: \n ${Object.values(hero.counters).toString().replace(/,/g, ', ')}`;
  }

  return message;
}

const getHeroNameFromMessage = (message) => {
  let messageToReply = '';

  const HERO = message.content
    .trim()
    .substring(COUNTERPREFIX.length)
    .trim();

  if (HERO) {
    messageToReply = getCountersByHeroFromMessage(HERO.toLowerCase());
  }

  return messageToReply;
}

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('message', (message) => {
  let messageToReply = '';

  if (message.content.toLowerCase().startsWith(COUNTERPREFIX)) {
    messageToReply = getHeroNameFromMessage(message);
  }

  if (messageToReply !== '') {
    message.reply(messageToReply);
  }
});
