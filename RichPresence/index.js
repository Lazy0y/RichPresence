const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on('ready', () => {
    rpc.setActivity({
        details: "Playing...",
        state: "Don't dm!",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "s15",
        smallImageKey: "small",
        smallImageText: "s13"
    })
})

console.log("Rich presence activé!")

rpc.login({
    clientId: "979342112430633000"
})