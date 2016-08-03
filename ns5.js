var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
	ext = '.' + process.argv[3];
	if (err) throw err;
	list.forEach(function (p) {
		if (path.extname(p) === ext)
			console.log(p);
	});
});

