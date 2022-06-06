const { MessageEmbed, Client, CommandInteraction } = require("discord.js")
const { joinVoiceChannel } = require("@discordjs/voice")
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
    name: "bağlan",
    description: 'Kanala Bağlanır',
    permissions: ["MANAGE_CHANNELS"],
    options: [],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        if (interaction.guild.me.voice.channel) interaction.guild.me.voice.disconnect();
        try {
            let kanal = await db.get("kanal");
            joinVoiceChannel({
                channelId: kanal,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator
            })
            interaction.reply({ content: "Kanala bağlanıldı" });
        }
        catch {
            interaction.reply({ content: "Kanala bağlantısı sırasında hata oluştu" });
        }



    }
};