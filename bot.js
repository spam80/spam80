const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === 'day'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'credit'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep @!َ • KَIَNَGَ_َDَzَ , Guèrilla#1234 ')
    }
});

client2.on('message', message => {
    if(message.content === 'day'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === 'credit'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep @!َ • KَIَNَGَ_َDَzَ , Guèrilla#1234 ')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 4000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
