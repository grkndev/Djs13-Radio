const { Intents } = require("discord.js");
const Client = require('@voiddevs.org/slashbot');
const $ = new Client({
    token: "",
    intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_VOICE_STATES],
    permissionMessage: "Bu komutu kullanman için `{perm}` yetkisine sahip olmalısın"
})

const radyo = require("./yayın.js");
$.commandLoader("./komtlar/", ".js", (cmd) => {
    console.log(`(!): ${cmd} yüklendi`)
})
$.client.on("ready", () => {
    console.log(`${$.client.user.tag} is online!`);
    $.client.user.setActivity({ name: "7/24 Radyo! | /yardım", type: "LISTENING" });
    radyo($.client);
    setInterval(radyo, Math.max(3600000))
})
$.init();