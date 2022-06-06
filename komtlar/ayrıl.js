const { MessageEmbed,Client,CommandInteraction } = require("discord.js");
module.exports = {
    name:"ayrıl",
    description: 'Kanaldan ayrılır',
    permissions:["MANAGE_CHANNELS"],
    options:[],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        if (interaction.guild.me.voice.channel)
        {
            interaction.guild.me.voice.disconnect();
            interaction.reply({content:"Kanaldan Ayrıldım"});
        }
        else
        {
            interaction.reply({content:"Zaten bir kanalda değilim"});
        }
     
      
}
};