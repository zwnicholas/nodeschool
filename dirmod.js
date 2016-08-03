var fs = require('fs');
var path = require('path');


 function daddyfunc(dirname, ext, callback) {
	extapp = '.' + ext;
	fs.readdir(dirname, function (err, list) { // list is the raw file list from readdir
		
		if (err)
			return callback(err);// early return 
		var	filtered = list.filter(function (p) {
			if (path.extname(p) === extapp)
				return p;
			
		});/*Key error was here. callback can't be in filter callback.
		Need to find out why. I guess it would be preferable
		to call the callback with the complete filtered array.
		
			*/
		 callback(null, filtered);
	});
};

 module.exports = daddyfunc;