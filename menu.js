var col = require('colors');
exports.show = function(argv){
	
	argv = argv.splice(2);
	
	if(!argv[0]){
		console.log("THIS IS THE CLI FOR GENERATE A FAST PROJECT IN ANGULARJS".grey);
		console.log("Usage".yellow+": ng-make"+ "[keyword]".blue +"[options]".green);
		console.log("[keyword]: you can obtain info for usage of the passing keyword");
		console.log("\t---"+"[keyword]".blue+": the keyword are:");
		console.log("\t\t"+"makeProject".blue+" => Used for create a new project in angular js");
		console.log("\t\t\t\tUsage: ng-make makeProject nameOfYourApp");
		console.log("\t\t"+"controller".blue+" => Used for create a new controller \n\t\t\t\t"+"!important ( FOR USE THIS YOU MUST BE INSIDE THE PROJECT DIRECTORY )".bgRed.white);
		console.log("\t\t"+"view".blue+" => Used for create a new project in angular js");
		
	}
	
}