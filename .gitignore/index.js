
bot.on('message', function (message) {
	if (message.content === ':help') {
		let Embed = new Discord.RichEmbed()
		.setDescription("Les commandes:")
		.setColor("#f95959")
		.addField("!help = list des commandes", "!server = infos sur le server")
		.addField("!rules = afficher les règles du serveur", "!r = commandes serveur privé")
		.setFooter('Bot by ĸαyzo#8019')
		message.channel.send(Embed) 
	}
})

bot.on('message', function (message) {
	if (message.content === ':rules') {
		let Embedrules = new Discord.RichEmbed()
		.setDescription("Bienvenue sur le discord Embed")
		.setColor("#f95959")
		.addField("1. Invité le bot sur votre discord.", "2.Demander un Embed dans le canal #demande-de-embed.")
		.addField("3. Donner les infos a mettre dans votre Embed.", "4. Merci de faire de la pub et d'être patient.")
		.setFooter('Accepter ✅ ou refuser❌les règles')
		message.channel.send(Embedrules) 
	}
})

bot.on('message', function (message) {
	if (message.content === ':test') {
		let Embedrules = new Discord.RichEmbed()
		.setDescription("Voici un Embed")
		.setColor("#f95959")
		.addField("1. Tu peu mettre ce que tu veux.", "2.Choisir la couleur de ton Embed.")
		.addField("3. tu peu mettre ce que tu veux.", "4. Choisir la couleur de ton Embed.")
		.setFooter('Et mettre ✅ Une❌Description')
		message.channel.send(Embedrules) 
	}
})
bot.login('NTMxNDk0MTk5NjQ4OTc2OTM5.DxO0Bw.qWpYzZ9ccY43kjo5dJxswlsIZ-w')
