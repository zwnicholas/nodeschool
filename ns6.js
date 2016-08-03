var dirmod = require('./dirmod.js');

function cb (err, filtered) {
	if (err) throw err;
	filtered.forEach(function(p) {	
	console.log(p);
	});
};
dirname = process.argv[2];
ext = process.argv[3];

function dirfilter (dir, extens) {
	dirmod(dir, extens, cb);
}
dirfilter(dirname, ext);