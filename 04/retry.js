'use strict';

var fs = require('fs');
var args = process.argv[2];
fs.readFile(args, 'utf8', function(err, text) {
	if(err) throw err;
	var lines = text.toString().split('\n');
	return console.log(lines.length-1);
});

//console.log(lines);

//var lines = fileText.split('\n');
//console.log(lines.length-1);
