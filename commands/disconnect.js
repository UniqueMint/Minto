const { DiscordAPIError, Discord } = require("discord.js");

module.exports = {
    name: 'disconnect',
    aliases: ['dc'],
    execute(message, args, client, Discord) {
        let vc = message.member.voice.channel
        if (!vc) return message.reply('You can\'t stop the music if you\'re outside of the VC!');
        
    message.channel.send('DC-TEST-COMMAND')
    }
}