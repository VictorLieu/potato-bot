require('dotenv').config();

const tmi = require('tmi.js');


const client = new tmi.Client({
    connection: {
        reconnect: true
    },
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,  // username of twitch bot
		password: process.env.TWITCH_OAUTH_TOKEN    // OAuth token
	},
	channels: [ process.env.TWITCH_STREAMER_USERNAME ] // username of twitch channel/streamer
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // TODO: handle channel point redemption actions
});