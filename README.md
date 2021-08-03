# Dota2CountersDiscordBot
Dota 2 Counters is a Discord BOT that will tell you which are the top five (5) heroes that counter the desired one. All data is retrieved from Dotabuff website.
For more info, access: https://top.gg/bot/835946840561156096

## Installation
Clone this repository:
```bash
git clone https://github.com/Guilospanck/Dota2CountersDiscordBot.git
```
Be sure to have [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install).

## How to use
To test in your Discord server and modify it as you wish, first you must have a BOT. To do so, go to [Discord Developer Portal](https://discord.com/developers/applications/) website, login with your Discord account and then create a new application.
When creating, you'll see that there is a *Bot Token*. Save it into the <code>.env</code> file to control your BOT.

Then run:
```bash
yarn 
```
To install all packages described in the <code>package.json</code> file, and
```bash
yarn start
```
To actually run the BOT.

By doing this, your BOT will be up and running. Now you have to add it to your server to test commands.
Go to the [TopGG](https://top.gg/bot/new) website (which groups every Discord BOT) and then add your BOT there.
After that, just invite it to your server and send commands to it.
