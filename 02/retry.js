var args = [];
for(var i = 0; i < process.argv.length - 2; i++){
	args[i] = Number(process.argv[i+2]);
}
var log = console.log;
// log("args:",args);

function sum(args) {
	var sum = 0;

	/* let us make it simpler */
	for (var i = 0; i < args.length; i ++){
		sum += Number(args[i]);
	}

	log(sum);
}

sum(args);
