# ccbdqr
a "Cheap 'Cheap Bots Done Quick' Replacement" for automatically tweeting Tracery grammar outputs

### Usage
Steps to set up this bot:

1. Downlad this repository and extract it to a folder of your choice.
2. Replace the contents of `src/config/traceryConfig.json` with your own Tracery-Grammar code.
3. add your Twitter API Keys from your Twitter Developer page to `src/config/credentials.env.test` and rename the file to  `credentials.env`
4. (optional) Change the `postInterval` value in `src/config/config.json` to your preference. By default, it's set to 180, which means that the bot will create a tweet every 180 minutes.
5. To run the bot, install the latest version of Node.js for your OS from [here](https://nodejs.org/en/download/current).
6. Once Node.js is installed, open the CLI of your choice/OS and navigate to the root path of the copy of this repository you downloaded earlier (the folder containing the file `package.json`)
7. Type `npm install` to install all the dependencies the bot needs to work.
8. To run the bot, type `npm run start`.

Congrats! The bot should now be up and running!
