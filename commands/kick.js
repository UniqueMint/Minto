const { DiscordAPIError, Discord } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'kick',
    aliases: ['remove'],
    execute(message, args, client, Discord) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "/"

        async function kicklmao() {


        //NO MEMBER PERMISSION
        let noPermissionMember = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription(`You don't have permissions to kick members`)
        if (!message.member.hasPermission(['KICK_MEMBERS' || 'ADMINISTRATOR'])) return message.channel.send(noPermissionMember);


        //NO PERMISSION
        let noPermission = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription(`I don't have permissions to kick members`)
        if (!message.guild.me.hasPermission(['KICK_MEMBERS' || 'ADMINISTRATOR'])) return message.channel.send(noPermission);


        //NO ARGUMENT
        let noArgs = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription(`Please put a valid command! ${prefix}ban <member> <reason> ex : **${prefix}kick @BadMember He nuked the server**`)
        if(!args[0]) return message.channel.send(noArgs);
    

        let member = message.mentions.members.first();


        //NO member OR INVALID member
        let noMember = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription(`That's not a valid member`)
        if (!member) return message.channel.send(noMember);


        //KICKING HISSELF
        let kickHisSelf = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription(`You can't kick yourself`)
        if (member === message.member) return message.channel.send(kickHisSelf)


        //KICKING OWNER
        let kickOwner = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription('You can\'t kick the owner')
        if (member === message.guild.owner) return message.channel.send(kickOwner)


        //UNBANNABLE MEMBER
        let unkickable = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription(` I can't kick the user! He probably have a higher role than me`)
        if (!member.kickable) return message.channel.send(unkickable);


        let reason = args.join(" ").slice(args[0].length);

        //NO REASON TO KICK
        let noReason = new Discord.MessageEmbed()
            .setColor('#ffff00')
           .setDescription(`You have to put a reason`)
        if (!reason) return message.channel.send(noReason);
    

        //KICK
        member.kick(reason, {days: 1});
        let kick_embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
           .setDescription(`Kicked ${member.username}`)
        await message.channel.send(kick_embed);
        }
        kicklmao()
    }
}