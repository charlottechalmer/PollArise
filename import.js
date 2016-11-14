
var exec = require("child_process").exec;
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/celebs");
var Profile = require('./app/models/profile.js');

var politicians = [
['realdonaldtrump', 'Republican'],
];


for (var p of politicians) {
	exec('curl --data "" http://localhost:3000/celebrities/add/@' + p[0], function(error) {
		if (error) {
			console.log("error");
		}
		Profile.findOneAndUpdate({username: p[0]}, {$set: {"politicalParty": p[1]}}, {upsert: true}, (err, data) => {
			if (err) {
				console.log(err);
			}
			console.log("updated");
			console.log(data);
		});
		
	
	// 	//GO INTO MONGOOSE AND UPDATE PERSON's POLITICAL AFFILIATION (p[1]) findOneAndUpdate
	});
}