const Discord = require('discord.js');

module.exports = {
    name: 'delete',
    description: 'deletes the ticket',
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client 
     */
    async execute(message, args, client) {
        await client.users.fetch(message.channel.topic).then(() => {
            if (message.channel.deletable) {
                message.channel.send('This ticket will be deleted in 5 seconds.');
                setTimeout(() => {
                    return message.channel.delete().catch(err => console.log(err));
                }, 5000);
            }
            throw new Error('cmd.errors.DELETE: Channel is not deletable');
        }).catch(() => {
            message.reply('This is not a valid ticket channel!');
        });
    }
}