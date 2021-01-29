const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: 'help',
    description: 'help for the bot',
    /**
     * @param {Discord.Message} message
     */
    execute(message) {
        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle('Bot Help!')
                .setDescription(`The prefix for this bot is: \`${config.prefix}\``)
                .addField('Ticket Commands', '`new`, `delete`')
                .addField('Other Commands', '`help`')
                .setColor('RANDOM')
        );
    }
}