import logger from './utils/logger.js';
import tracery from './utils/tracery.js';
import escExit from 'esc-exit';

import { sendTweet } from "./utils/sendPost.js"

import { createRequire } from "module";
const require = createRequire(import.meta.url);

//Load post interval
let config = require("./config/config.json");
let postInterval = config.postInterval

//load tracery config for the first time
let traceryConfig = require("./config/traceryConfig.json");

//refresh tracery config and send tweet
function updateConfig() {

    delete require.cache[require.resolve('./config/traceryConfig.json')]   // Deleting loaded module
    traceryConfig = require("./config/traceryConfig.json");

    sendTweet(tracery(traceryConfig))

    //logger(tracery(config))
        
}

///Initialization

console.log("To quit, press ESC or Ctrl-C\n\n");
logger("Bot started successfully\n");

escExit();

let uptime = 0;

updateConfig()

///Uptime message

setInterval(() => {
    uptime = uptime + 12;
    logger("Running for " + uptime + " hours :)");
},  12 * 60 * 60 * 1000 )

//Post Schedule

setInterval(() => {
    updateConfig()
},  postInterval * 60 * 1000 )