var http = require('http');
var URL = process.argv[2];

var getter = http.get(URL,  (res) => {
	res.setEncoding("utf8");
	res.on('data', (data) => {
		console.log(data);
	})
	res.on('error', (error) =>  {
		console.log(error);
		/* compare syntax with this
		res.on('error', console.error)
	*/});
});
getter.on('error', console.error);
