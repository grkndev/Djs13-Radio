const { MessageEmbed, Client, CommandInteraction } = require("discord.js");
module.exports = {
    name: "yardım",
    description: 'Botun Yardım Menüsü',
    permissions: [],
    options: [],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const embed = new MessageEmbed()
            .setTitle(`${client.user.username} Yardım Menüsü`)
            .setDescription(`Botu bu komutlarla yönetebilrisin!`)

            .addField(`/radyo <yayın>`, `Seçtiğiniz Frekanstaki Radyoyu çalar`, true)
            .addField(`/bağlan`, `Radyo kanalına bağlanır`, true)
            .addField(`/ayrıl`, `Radyo Kanalından ayrılır`, true)
            .addField(`/oynatılan`, `Şuanda çalan radyoyu gösterir`, true)
            .addField(`/setkanal`, `Radyo kanalını ayarlarsınız`, true)
            .addField(`/ping`, `Botun gecikmesi`, true)
            .setColor("GOLD")
            .setFooter({ text: `${client.user.username} 7/24 Radyo keyfi!`, iconURL: client.user.avatarURL() })

        interaction.reply({ embeds: [embed] });

    }
};