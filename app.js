var Discord = require('discord.js')
var client = new Discord.Client()
var config = require("./config.json")

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username} using Role Manager for Discord`)
});

client.on("message", message => {
    if (message.content.startsWith(config.prefix)) {
        const usrCmd = message.content.slice(1, message.content.length).toLowerCase()
        for (i = 0; i < config.roles.length; i++) {
            if (usrCmd == config.roles[i].command) {
                var role;
                if (message.guild.roles.exists("name", config.roles[i].role_name))
                    role = message.guild.roles.find("name", config.roles[i].role_name)
                if (message.guild.roles.exists("id", config.roles[i].role_id))
                    role = message.guild.roles.find("id", config.roles[i].role_id)
                if (config.roles[i].group != "") for (l = 0; l < config.roles.length; l++) {
                    if (config.roles[i].group == config.roles[l].group) {
                        var curRole;
                        if (message.guild.roles.exists("name", config.roles[l].role_name))
                            curRole = message.guild.roles.find("name", config.roles[l].role_name)
                        if (message.guild.roles.exists("id", config.roles[l].role_id))
                            curRole = message.guild.roles.find("id", config.roles[l].role_id)
                        if (message.member.roles.exists("id", curRole.id)) {
                            message.member.removeRole(curRole)
                            if (i == l)
                                return;
                        }
                    }
                }
                message.member.addRole(role)
            }
        }
    }
});

client.login(config.token);
