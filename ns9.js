
var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var count = 0;

var lines = [];
function wrapper(id) {	
	count++;  
	/* for some reason this count is essential. creating a closure with wrapper(i)
	and relying on lines.length = 3 is not sufficient. You need to increment
	count when we create another get, and decrement count when the server response ends.
	Otherwise, the code only works sometimes and not reliably.
	*/
	var body = [];

	http.get(process.argv[2+i], function(response) {	
		response.setEncoding('utf8');
		response.on('data', function(data) {
			body.push(data);
		});
		response.on('end', function() {
			count--;
			lines[id] = body.join('');
			if (count === 0) { // previously, if (lines.length === 3). Why doesn't that work?
				for (var j=0; j<3; j++)
					console.log(lines[j]);
			}
		
		});
	}).on('error', console.error); // if get req has an error print it
	};


for (var i= 0; i<3; i++) { // wrapper function creates a closure.
	wrapper(i);
}