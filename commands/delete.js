const { DiscordAPIError, Discord } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'delete',
    aliases: ['deletechannel', 'delch', 'deletechat'],
    execute(message, args, client, Discord) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = '/'

        async function deletechatlmao() {


        //NO MEMBER PERMISSION
        let noPermissionMember = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`You don't have permissions to manage channels`)
        if (!message.member.hasPermission(['MANAGE_CHANNELS' || 'ADMINISTRATOR'])) return message.channel.send(noPermissionMember);


        //NO PERMISSION
        let noPermission = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`I don't have permissions to manage channels`)
        if (!message.guild.me.hasPermission(['MANAGE_CHANNELS' || 'ADMINISTRATOR'])) return message.channel.send(noPermission);


        //NO ARGUMENTS
        let noArgs = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`Please put a valid command! ex : **${prefix}delete #spam-channel**`)
        if(!args[0]) return message.channel.send(noArgs);
    

        let channel = message.mentions.channels.first();


        //INVALID CHAT
        let invalidCh = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription('Thats not a valid channel')
        if (!channel) return message.channel.send(invalidCh);
    

        //DELETING PROCESS
        channel.delete();


        //SUCCESSFULLY DELETED
        let delch = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`Deleted ${chat}`)
        await message.channel.send(delch);
        }
        deletechatlmao()
    }
}
