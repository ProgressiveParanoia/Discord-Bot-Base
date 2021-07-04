console.log("Hello world!");

const Discord = require('discord.js');
const { token, prefix} = require('./config.json');

const client = new Discord.Client();

client.once('ready', ()=>{
    console.log(`client ready! Loggedin as: ${client.user.tag}!`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return
});


//Login bot client
client.login(token);
