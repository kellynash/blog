var express = require ('express');
var bodyParser = require ('body-parser');
var axios = require ('axios');

var url = "https://api.github.com/users/kellynash/events";

fetchGithubEvents = function(req, res) {
	axios.get(url)
		.then(function (response) {
			var myEvents = response.data.map(function(g) {
				return {
					"id": g.id, "type": g.type,
					"repo": g.repo.name, "commitMessage": g.payload.commits}
			});
			res.json(myEvents);
		})
		.catch(function (response) {
			console.log(response);
		});
};


module.exports = fetchGithubEvents;