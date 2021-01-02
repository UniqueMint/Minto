const { DiscordAPIError, Discord } = require("discord.js");
const server = require('minecraft-server-util');

module.exports = {
    name: 'mcstatus',
    aliases: ['mcserverstatus', 'serverstatus', 'minecraftserverstatus', 'mcserver', 'minecraftstatus'],
    execute(message, args, client, Discord) {

            let noArgs1 = new Discord.MessageEmbed()
                .setColor('#ffff00')
               .setDescription('Please give me a Minecraft server IP')
            if(!args[0]) return message.channel.send(noArgs);

            let noArgs2 = new Discord.MessageEmbed()
                .setColor('#ffff00')
               .setDescription('Please give me a Minecraft server port')
            if(!args[1]) return message.channel.send(noArgs1);
     
            server(args[1], parseInt(args[2]), (error, response) =>{
                if(error) throw error

            const Embed = new Discord.MessageEmbed()
               .setDescription('Minecraft server')
                .addField('Server status', response.status)
                .addField('IP address', response.host, true)
                .addField('Version', response.version, true)
                .addField('Online players', response.onlinePlayers, true)
                .addField('Max players', response.maxPlayers, true)
            message.channel.send(Embed);
        }) 
    }
     
}
    

