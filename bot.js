const Discord = require("discord.js");
const prefix ="1";
const client = new Discord.Client();
console.log("Scrpit By Dream");

client.on("ready", () => {
let channel =     client.channels.get("هنا اي دي الروم")
setInterval(function() {
channel.send(`هنا كلام ال سبام`);
}, 30)
})

//say 

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});




client.login(process.env.BOT_TOKEN);
