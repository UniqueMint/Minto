const { DiscordAPIError, Discord } = require("discord.js");

module.exports = {
    name: 'error',
    aliases: ['windowsxperror', 'xp', 'windows', 'winxp', 'windowsxp', 'xperror', 'err'],
     execute(message, args, client, Discord) {
        let [TitleText, ErrorText, Button1, Button2, Button3] = args.join("+").split(",");

        let noTitle = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription('Please put a title!')
        if(!TitleText) return message.channel.send(noTitle);

        let noError = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription('Please put an error!')
        if(!ErrorText) return message.channel.send(noError);

        let noButton = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription('Please put a button! (seperate the 3 button text with a comma ",")')
        if(!Button1) return message.channel.send(noButton);

        let noButton2 = new Discord.MessageEmbed()
            .setColor('#ff0000')
           .setDescription('Please put another button! (seperate the 3 button text with a comma ",")')
        if(!Button1) return message.channel.send(noButton2);

        let image = `http://atom.smasher.org/error/xp.png.php?icon=Error&title=${TitleText}&url=&text=${ErrorText}&b1=${Button1}&b2=${Button2}&b3=${Button3}`
        if (!Button2) image = `http://atom.smasher.org/error/xp.png.php?icon=Error&title=${TitleText}&url=&text=${ErrorText}&b1=${Button1}`
        if (!Button3) image = `http://atom.smasher.org/error/xp.png.php?icon=Error&title=${TitleText}&url=&text=${ErrorText}&b1=${Button1}&b2=${Button2}`
        
        message.channel.send(image);
    }
}