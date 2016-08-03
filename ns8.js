var http = require('http');
var url = process.argv[2];

var body = [];

http.get(url, function(res) {	
	res.setEncoding('utf8');
	res.on('data', function(data) {
		body.push(data);
		//console.log(body.toString());
	}).on('end', function() {
		var result = body.join('')
		console.log(result.length);
		console.log(result);

	});
}).on('error', console.error);

