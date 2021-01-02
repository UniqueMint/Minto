const { DiscordAPIError, Discord } = require("discord.js");
const ytdl = require('ytdl-core');

module.exports = {
    name: 'indihome',
    aliases: ['indiroll', 'paketpheonix', 'masagus'],
    execute(message, args, client, Discord) {
        let vc = message.member.voice.channel
  
        if (args[0] === 'stop') {
            if(!vc) return message.reply("Ya need to join the vc to stop")
        vc.leave();
        return;
        }
        
        if (!vc) return message.reply('Please join a voice channel first!');
    
        message.channel.send("**Belilah paket indihome, emm rasanya seperti anda menjadi ironmen**");
            
        vc.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=s2qAOxOP_DY', { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
            
            dispatcher.on('finish', () => vc.leave());
        });
    }
}
