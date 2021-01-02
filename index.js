const Discord = require('discord.js');
const db = require('quick.db');
const fs = require('fs');
const { version } = require('./settings.json');

const client = new Discord.Client();
client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Activated');
	client.user.setActivity("/help", {type: 'STREAMING', url: `https://twitch.tv/videos/69420`});
	client.user.setStatus('idle');
});

client.on('message', message => {

	if(!message.guild) return;
	let prefix = db.get(`prefix_${message.guild.id}`);
	if(prefix === null)  prefix = '/'; 

	if(message.content.toLowerCase().includes('<@!724463666510037103>')) return message.channel.send(`My Prefix here is \`${prefix}\``);
	if(!message.content.toLowerCase().startsWith(prefix)) return;
	if(message.author.bot) return;
	if(message.content === prefix || message.content === `${prefix}a` || message.content === `${prefix}b`) return;

  	const args = message.content.slice(prefix.length).trim().split(' ');
  	const commandName = args.shift().toLowerCase();
  	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

try {  
	if(db.get('command_uses') === null) {db.set('command_uses', 1)}
	db.add('command_uses', 1);
	return command.execute(message, args, client, Discord, db, version);
}

catch (error) {
	message.reply(`Uh Oh.... \n  Sorry, you got an error \n Error : \`${error}\``);
	console.log(error);
}

});

client.on('error', () => { console.log(error); });
client.login('NzI0NDYzNjY2NTEwMDM3MTAz.XvAjXQ.xNlVORAtdQ1JPw0dHwc7lRcof14');