var fs = require('fs');

module.exports = function(request, response) {

  var apiFile = (__dirname + request.path.replace('/mock', 'mock') + '.json').replace('util', '');

  if (fs.existsSync(apiFile)) {

    console.log('Update mock.json');

    var json = JSON.stringify(request.body, null, "\t");

    fs.writeFile(apiFile, json, 'utf8', function(err) {
      if (err) return console.log(err);
    });
    response.status(200).send('Update');
  } else response.status(500).send('Not Update');
};
