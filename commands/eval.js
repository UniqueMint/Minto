const { error } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const fetch = require('node-fetch');
const opus = require('@discordjs/opus');
const ffmpeg = require('ffmpeg');
const db = require('quick.db');
const fs = require('fs');

module.exports = {
    name: 'eval',
    aliases: ['evaluate'],
    execute(message, args, client, Discord) {
        let owners = ['590390033626824754', '610737823888310272']
        if (!owners.includes(message.author.id)) return;
    
    function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
    }
    try {
    const code = args.join(" ");
    if(code.includes('-rm')) return message.channel.send(`LOL ${message.author.username} IS GAY`);
    let evaled = eval(code);
    
    if (typeof evaled !== "string");
    evaled = require("util").inspect(evaled);
    
    message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    }
}
