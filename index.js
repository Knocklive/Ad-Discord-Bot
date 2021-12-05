console.log('Loading...')

const DiscordJS = require('discord.js');
const fs = require('fs');
const cron = require('node-cron');

require('dotenv').config()

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const client = new DiscordJS.Client();

client.on('ready', () => {
    console.log('Bot loggged in as ' + client.user.tag);
    console.log('Bot is on ' + client.guilds.cache.size + ' Servers');
    client.user.setActivity(config.activity, { type: 'WATCHING' });
    console.log('Status erfolgreich gesetzt!');
    console.log();
})

const embed1 = new DiscordJS.MessageEmbed()
    .setColor('#a93691')
    .setImage('https://cdn.discordapp.com/attachments/879706306162872410/904708038936633344/Game_X.png');

const embed2 = new DiscordJS.MessageEmbed()
    .setColor('#a93691')
    .setTitle('X | UNSER HAUPTPARTNER: GAME X')
    .setDescription('> <:iemoji7:902243845956304897>**Was genau ist Game X?**\n> Game X ist einer der modernsten Discord Server im deutsch-\n> sprachigen Raum. Jegliche möglichkeiten die Discord einem\n>bietet wurden ausgeschöpft.\n\n> <:iemoji7:902243845956304897>**Welche Ziele verfolgt der Discord?**\n> Unser größtes Ziel ist es das der Discord perfekt wird. Jegliche\n> Systeme die momentan verfügbar sind oder in den nächsten \n> Wochen kommen werden sind zu 100 Prozent durchdacht und \n> Stimmig.\n\n> <:iemoji7:902243845956304897>**Warum sollte ich joinen?**\n> Wir wollen deinen Aufenthalt bei uns so angenehm und perfekt⠀\n> wie nur möglich gestalten. All Unsere Systeme sind darauf \n> ausgelegt niemanden auszubeuten oder auch nur im gerngsten\n> Eine Win-Win Situation zu erschaffen. Du erhältst bei uns alles\n> Kostenlos, ohne Aufwand etc.');

const embed3 = new DiscordJS.MessageEmbed()
    .setColor('#a93691')
    .setImage('https://cdn.discordapp.com/attachments/879706306162872410/904715105701343233/Funktionen.png');

const embed4 = new DiscordJS.MessageEmbed()
    .setColor('#a93691')
    .setTitle('X| UNSERE FUNKTIONEN')
    .setDescription('> <:iemoji7:902243845956304897>**Sind hier wirklich alle Funktionen aufgelistet?**\n> Nein, viele Funktionen sind es nicht Wert erwähnt zu werden\n>   weil es Standard Funktionen sind. Hier ist alles aufgelistet was\n>  unseren Discord ausmacht. \n\n> <:iemoji7:902243845956304897>**EINZIGARTIGE SYSTEME:**\n> <:po:902243819947438080>Manuelles Levelsystem\n> <:po:902243819947438080>Kostenfreie Desigsn\n> <:po:902243819947438080>Automatische Boosting Wand⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n> <:po:902243819947438080>Discord Charts\n\n**JOIN JETZT und überzeug dich selbst!**')
    .setFooter('https://discord.gg/UJ7GGB5J32')
    .setTimestamp();

cron.schedule('0 0,6,12,18 * * *', () => {
    if (member.guild.me.roles.cache.has('917122243346182155')) {
        client.channels.cache.get('910210588154671194').send(embed1);
        client.channels.cache.get('910210588154671194').send(embed2);
        client.channels.cache.get('910210588154671194').send(embed3);
        client.channels.cache.get('910210588154671194').send(embed4);
        client.channels.cache.get('910210588154671194').send('https://discord.gg/UJ7GGB5J32');
        }
      })
    
client.on('message', message => {
    if (message.channel.id === '910210588154671194') {
        message.crosspost();
    }
    if (message.content === '.werbung'){
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.react('☑️');
            client.channels.cache.get('910210588154671194').send(embed1);
            client.channels.cache.get('910210588154671194').send(embed2);
            client.channels.cache.get('910210588154671194').send(embed3);
            client.channels.cache.get('910210588154671194').send(embed4);
            client.channels.cache.get('910210588154671194').send('https://discord.gg/UJ7GGB5J32');
        }
    }
    if (message.content === '.test') {
        if (message.member.hasPermission("ADMINISTRATOR"))
            message.channel.send(embed1);
            message.channel.send(embed2);
            message.channel.send(embed3);
            message.channel.send(embed4);
            message.channel.send('https://discord.gg/UJ7GGB5J32');

        }
})

client.login(process.env.TOKEN)
