var http = require('http');
var PORT = Number(process.argv[2]);
var url = require('url');

function onRequest(request, response) {
	parsed = url.parse(request.url, true);
	date = new Date(parsed.query.iso);
	console.log(request.method);
	if (request.method != 'GET')		
		return response.end('Send me a GET request!');
	else if (request.method === 'GET' && parsed.pathname === '/api/parsetime') {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		dateObj = {
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		};
		toJSON = JSON.stringify(dateObj);
		console.log(toJSON);
		response.write(toJSON);
		response.end();
	}
	else if (request.method === 'GET' && parsed.pathname === '/api/unixtime') {
		response.writeHead(200, {'Content-Type': 'text/plain' });
		unixt = {
			"unixtime": date.getTime()
		};
		response.write(JSON.stringify(unixt));
		response.end();	
	}
};
http.createServer(onRequest).listen(PORT);

