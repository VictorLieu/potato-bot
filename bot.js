require("dotenv").config();
var ComfyJS = require("comfy.js");

ComfyJS.onChat = (user, message, flags, self, extra) => {
  if (flags.customReward) {
    switch (extra.customRewardId) {
      case process.env.TWITCH_CUSTOM_REWARD_ID_1:
        console.log(user + " has redeemed 1k points");
        ComfyJS.Say(`!addpoints ${user} 1000`);
        break;
      case process.env.TWITCH_CUSTOM_REWARD_ID_2:
        console.log(user + " has redeemed 5k points");
        ComfyJS.Say(`!addpoints ${user} 5000`);
        break;
      case process.env.TWITCH_CUSTOM_REWARD_ID_3:
        console.log(user + " has redeemed 10k points");
        ComfyJS.Say(`!addpoints ${user} 10000`);
        break;
    }
  }
};

ComfyJS.Init(
  process.env.TWITCH_STREAMER_USERNAME,
  process.env.TWITCH_OAUTH_TOKEN
);
