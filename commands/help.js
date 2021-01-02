const { DiscordAPIError, Discord } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'help',
    aliases: ['helpme', 'commands'],
    execute(message, args, client, Discord) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = '/'
        
        if(args[0] === "mod") { 
            let help_mod = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('Moderation')
                .addFields(
                    { name: 'Kick members', value: `${prefix}kick`, inline: true},
                    { name: 'Ban members', value: `${prefix}ban`, inline: true},
                    { name: `Delete Messages`, value: `${prefix}purge`, inline: true},
                    { name: 'Delete a channel ', value: `${prefix}delete`, inline: true},            
                    { name: 'Warn members', value: `${prefix}warn`, inline: true},
                    { name: 'Check warns', value: `${prefix}warns`, inline: true},
                )
        return message.channel.send(help_mod);
        }
                
        if (args[0] === 'helping') { 
            let help_help = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('General purpose commands')
                .addFields(
                    { name: `Make a Poll`, value: `${prefix}poll`, inline: true},
                    { name: 'Say as a a bot', value: `${prefix}say`, inline: true},
                    { name: 'All info about a user', value: `${prefix}userinfo`, inline: true},
                    { name: 'All info about the server', value: `${prefix}serverinfo`, inline: true},
                )
        return message.channel.send(help_help);
        }
                
        if (args[0] === 'more') { 
            let help_more = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('More stuff')
                .addFields(
                    { name: "Full stats", value: `${prefix}stats`, inline: true},
                    { name: `Give me command ideas`, value: `${prefix}idea`, inline: true},
                    { name: 'See what changed', value: `${prefix}changelog`, inline: true},
                    { name: 'Invite me', value: `${prefix}invite`, inline: true},
                        )
        return message.channel.send(help_more);
        }
        
        if (args[0] === 'owner') { 
            let help_owner = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle("pls no")
                .addFields(
                    { name: 'Rick Astley', value: '/rick'},
                    { name: 'Factory Reset', value: '/reset'},
                    { name: 'Evaluates the message', value: '/eval <code>'},
                    { name: 'Bot token ( ͡° ͜ʖ ͡°)', value: '/token'},
                )
        return message.channel.send(help_owner)
        }
        
        if (args[0] === 'music') {
            let help_music = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('Music commands')
                .addFields(
                    { name: 'Play tunes from YouTube', value: `${prefix}play (search)`, inline: true},
                    { name: 'Pause the music', value: `${prefix}pause`, inline: true},
                    { name: '* Jazz music stops *', value: `${prefix}stop`, inline: true},
                    { name: 'Disconnecc me plz', value: `${prefix}dc`, inline: true},
                    { name: `Rickroll people`, value: `${prefix}rickroll`, inline: true},
                    { name: 'Get stickbugged lol', value: `${prefix}stickbug`, inline: true},
                    { name: 'indihome fiber opticc', value: `${prefix}indihome`, inline: true},
                     )
        return message.channel.send(help_music);
        }

        if (args[0] === 'fun') {
            let help_fun = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('Fun and Memey things')
                .addFields(
                    { name: 'sorry me no have meme cmd, can u give me idea for command???'}
                )
            message.channel.send(help_fun)
        }
        
        else { 
            const help = new Discord.MessageEmbed()
                .setColor('#db1f6a')
                .setTitle('Help')
                .addFields(
                    { name: `Fun memes!`, value: `${prefix}help fun`, inline: true},
                    { name: 'Music commands!', value: `${prefix}help music`, inline: true},
                    { name: 'For moderating!', value: `${prefix}help mod`, inline: true},
                    { name: 'Check this one!', value: `${prefix}help helping`, inline: true}, 
                    { name: `Stats we show!`, value: `${prefix}help stats`, inline: true},
                    { name: 'More stuff!', value: `${prefix}help more`, inline: true},
                    { name: '\u200b', value: '\u200b'},
                    { name: 'Track Covid-19 cases!', value: `${prefix}corona`},
                )
                
            message.channel.send(help);
            }  
    }
}
