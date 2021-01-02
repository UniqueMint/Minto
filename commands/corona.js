const { DiscordAPIError, Discord } = require("discord.js");
const fetch = require('node-fetch');
const db = require('quick.db');

module.exports = {
    name: 'corona',
    aliases: ['covid19', 'covid', 'virus', 'coronavirus', 'cockrona', 'rona'],
    execute(message, args, client, Discord) {
        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = '/'

        if(args[0] === 'mars') {
            message.reply("no u")
            return;
        }
        
            let countries = args.join(" ");
        
                const noCountry = new Discord.MessageEmbed()
                .setTitle('Missing country')
                .setColor(0xFF0000)
                .setDescription('Oh No! The command missing a country! Valid commands : "/corona japan", "/corona brazil", etc.')
                .setTimestamp()
        
        if(!args[0]) return message.channel.send(noCountry);
        
        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
        
            const embed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .setThumbnail('https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg')
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
        
            message.channel.send(embed)
            })
        } 
            
        else {
        fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
        
                const embed = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setThumbnail('https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg')
                    .setTitle(`COVID-19 Stats for **${countries}**`)
                    .addField('Confirmed Cases', confirmed)
                    .addField('Recovered', recovered)
                    .addField('Deaths', deaths)
        
        message.channel.send(embed)
        })
        .catch(e => {
            let invalidCountry = new Discord.MessageEmbed()
                .setTitle('Invalid country')
                .setColor(0xFF0000)
                .setDescription('Oh No! The countryYou provided is invalid! Valid examples : "/corona japan", "/corona brazil", etc.')
                .setTimestamp()
            message.channel.send(invalidCountry)   
        })
        
        }
    }
}
