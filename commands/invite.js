const { DiscordAPIError, Discord } = require("discord.js");

module.exports = {
    name: 'invite',
    aliases: ['invitebot', 'inviteme'],
    execute(message, args, client, Discord) {
        let invite = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('Invite')
        .setURL('https://discord.com/oauth2/authorize?client_id=724463666510037103&scope=bot&permissions=104328318')
        .setAuthor('Minto')
        .setDescription('Invite me!')
        .setThumbnail(client.user.displayAvatarURL())
    message.channel.send(invite);
    }
}
