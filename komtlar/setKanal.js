const { MessageEmbed, Client, CommandInteraction } = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const radyo = require("../yayın.js");
module.exports = {
    name: "setKanal",
    description: 'Radyo Kanalını ayarlarsınız',
    permissions: ["MANAGE_CHANNELS"],
    options: [
        {
            name: "kanal",
            description: "Radyo yayını yapılacak Sesli kanalı seçerisiniz",
            type: 7,
            required: true,
            channel_types: ["GUILD_VOICE"]
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const sesli = interaction.options.getChannel("kanal").id;
        await db.set("kanal", sesli)
        interaction.reply({embeds:[{title:"Başarılı!",description:`Radyo Kanalı <#${sesli}> olarak ayarlandı`}]})
        radyo(client);
    }
};