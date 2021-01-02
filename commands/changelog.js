const { DiscordAPIError, Discord } = require("discord.js");

module.exports = {
    name: 'changelog',
    aliases: ['changes', 'change'],
    execute(message, args, client, Discord) {
        let changelog = new Discord.MessageEmbed()
        .setColor('#db1f6a')
        .setTitle('Changelog')
        .setAuthor('Release Version 1.3 | Stable')
        .setThumbnail('https://cdn.discordapp.com/attachments/755416254105518251/760491249927979029/unknown.png')
        .addFields(
            { name: 'warn, warnings, and removewarn command!'},
            { name: 'prefix command!'},
            { name: 'corona command!'},
            { name: 'indihome command!'}, 
            { name: 'Made all failed command error an embed (red)'},
            { name: 'Made all succesfull commands notification an embed! (green)'},
        )
    message.channel.send(changelog);
    }
}
