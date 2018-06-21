const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const p = config.prefix;

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setGame(name = '!a help', url = 'https://www.twitch.tv/giovanniv25', type = 1)
  client.user.setStatus('idle')
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
//=================================================================================\\
  if(command === "github") {
    message.channel.send({embed: {
      color: 5784356,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Click Here For The Link",
      url: "https://github.com/AceEllysium/discord-bot",
      description: "\u200b"}});
  }
//===================================================================================\\
  if(command === 'test') {
    message.channel.send('succes')
  }
//=====================================================================================\\
  if(command === "hello") {
    message.channel.send('Heyaa');
  }
//======================================================================================\\
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
//=======================================================================================\\
  if(command === 'slap') {
    message.channel.send('I Will Never Slap U :heart: http://lykosapi.cuddliness.xyz/images/hugs/avatar_2e200498fcdf_128.jpg')
  }
//=======================================================================================\\
  if(command === "feel") {
    var x = Math.floor((Math.random() * 2) + 1);
    if(x===1) {
      message.channel.send("I Feel Good");
    } else {
      message.channel.send("I Feel Not So Good")
    }
  }
//=======================================================================================\\    
if(command === "purge") {
  // This command removes all messages from all users in the channel, up to 100.

  // get the delete count, as an actual number.
  const deleteCount = parseInt(args[0], 10);
  
  // Ooooh nice, combined conditions. <3
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  // So we get our messages, and delete them. Simple enough, right?
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
//=====================================================================================\\
if (command === "help") {
  const embed = new Discord.RichEmbed()
    .setAuthor("Help Page", client.user.avatarURL)
    .setColor([136, 78, 160])
    .addField("!ahelp", "This Menu")
    .addField("!aping", "Pong!")
    .addField("!atest", "Respond With Success")
    .addField("!afeel", "Hows The Bot Feeling")
    .addField("!agithub", "Gives The GitHub Link")
    .addField("!aslap", "Slaps U(Or Not)")
    .addField("!ahello", "Responds With heyaa");

  message.author.sendEmbed(embed);
  message.channel.sendMessage(`${message.author}, I Send U A Private Message ~~Pls Tell Nobody OwO~~`);
}
//=======================================================================================\\         
});        
client.login(config.token);
