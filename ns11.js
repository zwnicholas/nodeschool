var http = require('http');
var PORT = process.argv[2];

var body = [];
function onRequest(request, response) {
	if (request.method === 'POST') {
		request.on('data', function(chunk) {
			body.push(chunk);
		}).on('end', function() {
			body = Buffer.concat(body).toString().toUpperCase();
			response.write(body);
			response.end();
		});
	}
}
http.createServer(onRequest).listen(PORT);