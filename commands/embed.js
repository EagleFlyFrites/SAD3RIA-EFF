const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setDescription('[Recherche Google](https://google.fr) **bonjour**')
            .setColor('RANDOM')
            .addField('Champ 1 **bonjour**', 'Bonjour c\'est moi **bonjour**', true)
            .addField('Champ 2', 'Blabla', true)
            .setAuthor('ala89 **bonjour**', 'https://cdn.discordapp.com/attachments/868067113020035082/869108433830436904/affiche_370x0.png', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/868067113020035082/869108433830436904/affiche_370x0.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/868067113020035082/869108433830436904/affiche_370x0.png')
            .setFooter('Mon bot perso **bonjour**', 'https://cdn.discordapp.com/attachments/718476721418141728/719563110154764298/logo.png')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}