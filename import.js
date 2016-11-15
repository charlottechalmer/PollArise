
var exec = require("child_process").exec;
var mongoose = require('mongoose');
mongoose.connect("mongodb://heroku_3s8krnvz:uk0hbagqb4ve7e9euegji3lkdk@ds153677.mlab.com:53677/heroku_3s8krnvz");
var Profile = require('./app/models/profile.js');

var politicians = [
['BarackObama', 'Democratic'],
['realdonaldtrump', 'Republican'],
['mike_pence', 'Republican'],
['HillaryClinton', 'Democratic'],
['timkaine', 'Democratic'],
['SenJohnMcCain', 'Republican'],
['GovGaryJohnson', 'Libertarian'],
['algore', 'Democratic'],
['Schwarzenegger', 'Republican'],
['SarahPalinUSA', 'Republican'],
['RepRonPaul', 'Libertarian'],
['RalphNader', 'Green Party'],
['glennbeck', 'Republican'],
['JohnKerry', 'Democratic'],
['MicheleBachmann', 'Republican'],
['MittRomney', 'Republican'],
['MikeBloomberg', 'Independent'],
['JoeBiden', 'Democratic'],
['SenSanders', 'Democratic'],
['DrJillStein', 'Green Party'],
['RandPaul', 'Republican'],
['CoryBooker', 'Democratic'],
['SpeakerRyan', 'Republican'],
['BobbyJindal', 'Republican'],
['NancyPelosi', 'Democratic'],
['GovMikeHuckabee', 'Republican'],
['JebBush', 'Republican'],
['BernieSanders', 'Democratic'],
['newtgingrich', 'Republican'],
['GovernorPerry', 'Republican'],
['SpeakerBoehner', 'Republican'],
['KarlRove', 'Republican'],
['SenatorReid', 'Democratic'],
['JerryBrownGov', 'Democratic'],
['JimDeMint', 'Republican'],
['EricCantor', 'Republican'],
['jasoninthehouse', 'Republican'],
['DarrellIssa', 'Republican'],
['GabbyGiffords', 'Democratic'],
['ScottWalker', 'Republican'],
['AllenWest', 'Republican'],
['clairecmc', 'Democratic'],
['SenWarren', 'Democratic'],
['ChuckGrassley', 'Republican'],
['NYCMayor', 'Democratic'],
['THEHermanCain', 'Republican'],
['alfranken', 'Democratic'],
['SenGillibrand', 'Democratic'],
['MartinOMalley', 'Democratic'],
['RickSantorum', 'Republican'],
['ChrisChristie', 'Republican'],
['tedcruz', 'Republican'],
['SenateMajLdr', 'Republican'],
['CondoleezzaRice', 'Republican'],
['MichelleObama', 'Democratic'],
['madeleine', 'Democratic']
];

var port = process.env.PORT || 3000;
for (var p in politicians) {
	exec('curl --data "" https://poll-arise.herokuapp.com/celebrities/add/@' + politicians[p][0].toLowerCase(), function(error) {
		if (error) {
			console.log(error);
		}
		Profile.findOneAndUpdate({username: politicians[p][0].toLowerCase()}, {$set: {"politicalParty": politicians[p][1]}}, {upsert: true}, (err, data) => {
			if (err) {
				console.log(err);
			}	
		});
	});
	console.log("updated");
}

Profile.find({}, (err, data) => {
	data.forEach(function(obj) {
		var politicalParty;
		for(var p of politicians) {
			if (p[0].toLowerCase() === obj.username) {
				politicalParty = p[1];
				break;
			}
		}
		Profile.update({username: obj.username}, {$set: {"politicalParty": politicalParty}}, {new: true}, (err, data) => {
			console.log("updated politicalParty");
		});
	});
})