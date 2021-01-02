const { DiscordAPIError, Discord } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'ban',
    aliases: 'hardban',
    execute(message, args, client, Discord) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = '/'

        async function banlmao() {


        //NO MEMBER PERMISSION
        let noPermissionMember = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`You don't have permissions to ban members`)
        if (!message.member.hasPermission(['BAN_MEMBERS' || 'ADMINISTRATOR'])) return message.channel.send(noPermissionMember);


        //NO PERMISSION
        let noPermission = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`I don't have permissions to ban members`)
        if (!message.guild.me.hasPermission(['BAN_MEMBERS' || 'ADMINISTRATOR'])) return message.channel.send(noPermission);


        //NO ARGUMENT
        let noArgs = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`Please put a valid command! ${prefix}ban <member> <reason> ex : **${prefix}ban @BAD_AF_MEMBER He nuked the server**`)
        if(!args[0]) return message.channel.send(noArgs);
    

        let person = message.mentions.members.first();


        //NO member OR INVALID member
        let noMember = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`That's not a valid member`)
        if (!person) return message.channel.send(noMember);


        //BANNING HISSELF
        let banHisSelf = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`You can\'t ban yourself`)
        if (person === message.member) return message.channel.send(banHisSelf)


        //BANNING OWNER
        let banOwner = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription('You can\'t ban the owner')
        if (person === message.guild.owner) return message.channel.send(banOwner)


        //UNBANNABLE MEMBER
        let unbannable = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`I can't ban the member! He probably have a higher role than me`)
        if (!person.bannable) return message.channel.send(unbannable);

        
        let reason = args.join(" ").slice(args[0].length);

        //NO REASON TO BAN
        let noReason = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setDescription(`You have to put a reason`)
        if (!reason) return message.channel.send(noReason);
    

        //BAN
        person.ban(reason, {days: 1});
        let ban_embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setDescription(`Banned ${person.username}`)
        await message.channel.send(ban_embed);
        }
        banlmao()
    }
}
