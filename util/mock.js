var fs = require('fs');

module.exports = function(request, response){
	setTimeout(function () {

		var apiFile = (__dirname + request.path.replace('/mock','mock') + '.json').replace('util','');

		if(fs.existsSync(apiFile)){
			console.log('Mock responded: ' + apiFile);
			var r = require(apiFile);
			response.json(r);
		} else response.status(404).send('Not found');
	}, 1000);
};
