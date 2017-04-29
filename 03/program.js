const fs = require('fs');

let str = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(str.length-1);
