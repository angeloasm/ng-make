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

exports.showHelpModule = function(argv){
	if(argv.length==1){
		console.log("ERR: You can't use this command, please try: "+"ng-make module -help".grey);
		
	}else{
		if(argv[1] == "-help" || argv[1] == "help" || argv[1] == "-h"){
			console.log("Help for the option module");
			console.log("You can use this option with the following keywords:");
			console.log("\tlist-installed".yellow+" -> shows all modules installed on your project");
			console.log("\tlist".yellow+" -> shows all modules available for ng-make");
			console.log("\tinstall nameOfModule".yellow+" -> install the module with the name passed, if it is available for ng-make repository");
			console.log("-----------------------------------------------------");
			console.log("In other case you should use this option command with the name of module, that you would to install.".red+"Example: ng-make module nameOfPersonalModule".yellow);
			console.log("Example of Using: "+"ng-make module install bootstrap".yellow+" to install the bootstrap modules.\n\n");
			console.log("For add your module put the descriptor on the (http://angelocarraggi.altervista.org/ng-make)");
			
		}else{
			return 2;
		}
	}
	
}

exports.showStateHelp = function(argv){
	if(argv.length == 1){
		console.log("ERR: You can try to use this command as :\n".bgWhite.red+" ng-make state nameOfState [default(optional)] [abstract(optional)]".grey);
	}
}

exports.showWebServerHelp = function(argv){
	
	if(argv.length==1){
		console.log("Using default value for the server")
		console.log("Starting your server in http://localhost:9090");
	}else{
		
	}
	
}
/*
exports.showInsert(){
	
}

exports.showInitDownload(){
	
}

exports.showFinishDownload(){
	
}*/