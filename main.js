const Discord = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Discord.Client();
const { Client, MessageEmbed, Intents } = require('discord.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  console.log("Un nouveau membre est arrivé");
  member.roles.add('836632834646212649');
});

client.on('guildMemberAdd', async (member) => {
  // Récupération des informations du salon
  const channel = await client.channels.fetch('908401636525887559');

  // Récupération des informations du nouveau membre
  const user = await client.users.fetch(member.id);

  // On créé un nouveau message embarqué,
  // et on déclare le titre, la couleur, etc...
  const embed = new MessageEmbed()
      .setTitle(`Bienvenue sur Novads !`)
      .setColor(2904529,)
      .setDescription(`${member}, toute l'équipe Novads te souhaite la bienvenue ! :tada: :tada:`)
      .setURL('https://novads.net')
      .setFooter(`N'oubliez pas de valider les règles du serveur Discord `)
      .setThumbnail(user.displayAvatarURL());

  // Pour terminer, on envoie le message embarqué
  channel.send(embed);
});


client.login(process.env.TOKEN);