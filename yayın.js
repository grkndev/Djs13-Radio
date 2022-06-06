const { createAudioResource, joinVoiceChannel, createAudioPlayer } = require('@discordjs/voice');
const { QuickDB } = require("quick.db");
const yayınlar = require("./radyolar.json");
const db = new QuickDB();
async function RadioRepeater(client) {
    let radyo = await db.get("radyo");
    let kanal = await db.get("kanal");
    let Channel = client.channels.cache.get("982995592680718406");
    if (!radyo || !kanal || !Channel) return;

    try {
        var streamURL = radyo;
        const player = createAudioPlayer();
        const resource = createAudioResource(streamURL);
        const con = joinVoiceChannel({
            channelId: Channel.id,
            guildId: Channel.guildId,
            selfDeaf: true,
            selfMute: false,
            adapterCreator: Channel.guild.voiceAdapterCreator
        })
        player.play(resource);
        con.subscribe(player);
    }
    catch {
        console.log("Radyo Yayın istemcisinde Hata Oluştu!");
    }
}
module.exports = RadioRepeater;