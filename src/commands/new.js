const Discord = require('discord.js');

module.exports = {
    name: 'new',
    description: 'Creates a new ticket',
    /**
     * @param {Discord.Message} message
     */
    execute(message) {
        message.react('✅');

        let modRole = message.guild.roles.cache.find(r => r.name === 'Mod');

        if (!modRole) {
            throw new Error('cmd.errors.NEW: Mod role was not found.');
        }

        message.guild.channels.create(`${message.author.username}-${message.author.discriminator}`, {
            parent: '', 
            topic: message.author.id,
            type: 'text',
            permissionOverwrites: [
                { id: message.guild.id, deny: ['VIEW_CHANNEL'] },
                { id: modRole.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                { id: message.author.id, allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] }
            ]
        }).then(c => {
            const embed = new Discord.MessageEmbed()
                .setTitle('New Ticket')
                .setDescription(`Hello <@${message.author.id}>, you have created a new ticket. Please wait as staff will be here shortly!`)
                .setColor('RANDOM')
                .setTimestamp();

            c.send(embed);
        }).catch(err => console.error(err));
    }
}