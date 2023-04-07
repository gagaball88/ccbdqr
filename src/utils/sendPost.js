import { twitterConfig } from "../config/credentials.js";
import logger from "./logger.js";
import {TwitterApi} from "twitter-api-v2";

const twitterClient = new TwitterApi(twitterConfig);


export async function sendTweet(message) {

    await twitterClient.v1.tweet(message);
    logger("Tweet sent successfully: " + message);

}

