const { DiscordAPIError, Discord } = require("discord.js");

module.exports = {
    name: 'idea',
    aliases: ['giveidea'],
    execute(message, args, client, Discord) {
        let idea = new Discord.MessageEmbed()
        .setColor('#db1f6a')
        .setTitle('SendYour ideas here!')
        .setURL('https://docs.google.com/forms/d/1xyxORa8DYrRIf1AXdZQ3vIRF9Slj42CBQDIN4po4hWw/')
        .setThumbnail('https://cdn.discordapp.com/avatars/724463666510037103/88068bcc56d8a0a3f7fb47d327deedf2.png?size=1024')
        .addField('CLICK THE BLUE TEXT!!1!!1', 'click it bcuz i want ur opinion and suggestion for this bot')
    message.channel.send(idea);
    }
}
