const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
    if (/^!spongecase/i.test(msg.content)) {
        let tokens = msg.content.split(' ')
        tokens.shift();
        let str = tokens.join(' ');


         // here's the dang algorithm
        let counter = 0;
        let spongeArray = [];
        str.split('').forEach((chr) => {
            if (/[A-Za-z]/.test(chr)) {
                if (counter % 2 == 0) {
                    spongeArray.push(chr.toUpperCase());
                } else {
                    spongeArray.push(chr.toLowerCase());
                }
                counter = counter + 1;

            } else {
                spongeArray.push(chr);
            }
        });
        spongeString = spongeArray.join('');
        msg.channel.send(spongeString);
    }
});

client.on('message', async msg => {

  if (/^!compliment/i.test(msg.content)) {

    const fetch = require('node-fetch');
    let	response = await fetch('https://complimentr.com/api');
    let data = await response.json();

    await msg.channel.send(data.compliment);
  }
});

client.login(process.env.BOT_TOKEN);
