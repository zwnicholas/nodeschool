var net = require("net");
var port = process.argv[2];

function dateZeroPad(num) {
	if (num < 10)
		return ('0' + num)

		else return num;
	};

var server = net.createServer(function (socket) {

})