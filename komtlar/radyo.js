const { MessageEmbed, Client, CommandInteraction } = require("discord.js");
const radyo = require("../yayın.js");
const yayınlar = require("../radyolar.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
    name: "radyo",
    description: 'Radyoyu ayarlarsınız',
    permissions: ["MANAGE_CHANNELS"],
    options: [
        {
            name: "kanal",
            description: "Dinlemek istediğiniz Radyo Yayını seçerisiniz",
            type: 3,
            required: true,
            choices: [
                { name: "Kral POP", value: "kralPop" },
                { name: "Kral FM", value: "kralFm" },
                { name: "Power FM", value: "powerFm" },
                // { name: "Best FM", value: "bestFm" },
                { name: "Fenomen", value: "fenomen" }
            ]
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const fm = {
            "kralPop": "Kral Pop",
            "kralFm": "Kral FM",
            "powerFm": "Power FM",
            "bestFm": "Best FM",
            "fenomen": "Fenomen"
        }
        const val = interaction.options.get("kanal").value;
        db.set("radyo", yayınlar[val]);
        interaction.reply({ embeds: [{ description: `**${fm[val]}** isimli Radyo Dinleniyor!` }] });
        radyo(client);

    }
};