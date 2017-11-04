# Discord Role Manager

## About

Role Manager lets you allow members of your Discord server to receive roles through commands.

## How to use

1. Install node.js
2. In the Main Directory, use the command `npm install`
3. Configure config.json to your liking and add your bot token.
4. Run app.js

## Configuring the bot

The config hold 3 basic elements: The token for the bot, the prefix for the commands, and roles.

#### The token

For the token follow this wounderfuly explained tutorial by reactiflux [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

#### Prefix

This is the prefix for the role command. For example if your prefix is "!" your command will work like "!boy", while if your prefix is "~" your commands will be used like "~boy".

#### Roles

To setup the roles in this bot is a very simple process. First, you create the command name for the role, this will be put in the "command" section. Secondly you need a role name or role ID this is the name of the role or the id of the role respectivley. You only need to choose on of the options as it will work with either. Lastly, you might need a group, if you only want to have members of your server having one of a set of roles then set their "group" option to the same name and they should only be able to have on of those roles at time.
