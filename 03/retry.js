var fs = require('fs');
var arg = process.argv[2];
var log = console.log;

// log(arg);

var lines = fs.readFileSync(arg, 'utf8');
lines = lines.split('\n');
console.log(lines.length-1);
