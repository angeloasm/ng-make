var col = require('colors');
exports.show = function(argv){
	
	argv = argv.splice(2);
	
	if(!argv[0]){
		console.log("THIS IS THE CLI FOR GENERATE A FAST PROJECT IN ANGULARJS".grey);
		console.log("Usage".yellow+": ng-make"+ "[keyword]".blue +"[options]".green);
		console.log("[keyword]: you can obtain info for usage of the passing keyword");
		console.log("\t---"+"[keyword]".blue+": the keyword are:");
		console.log("\t\t"+"project".blue+" => Used for create a new project in angular js");
		console.log("\t\t\t\tUsage: ng-make project nameOfYourApp");
		console.log("\t\t"+"state".blue+" => Used for create a new state with the controller and template with the same name \n\t\t\t\t"+"!important ( FOR USE THIS YOU MUST BE INSIDE THE PROJECT DIRECTORY )".bgRed.white);
		console.log("\t\t"+"module".blue+" => Used for create a new module in angular js");
		
	}
	
}

exports.showGeneralHelp = function(argv,version)
{
	if(!argv[0]){
		console.log( " __    _  _______         __   __  _______  ___   _  _______ ".bgBlack.green);
		console.log( "|  |  | ||       |       |  |_|  ||   _   ||   | | ||       |".bgBlack.green);
		console.log( "|   |_| ||    ___| ____  |       ||  |_|  ||   |_| ||    ___|".bgBlack.green);
		console.log( "|       ||   | __ |____| |       ||       ||      _||   |___ ".bgBlack.green);
		console.log( "|  _    ||   ||  |       |       ||       ||     |_ |    ___|".bgBlack.green);
		console.log( "| | |   ||   |_| |       | ||_|| ||   _   ||    _  ||   |___ ".bgBlack.green);
		console.log( "|_|  |__||_______|       |_|   |_||__| |__||___| |_||_______|".bgBlack.green);
		console.log("\nCLI Powered by axc1011".yellow);
		console.log("version:"+version);
		console.log("\nFOR OTHER INFO GO AT THE WEB SITE(https://www.npmjs.com/package/ng-make)".red);
		
	}else{
	
		if(argv[0] == "-help" || argv[0] == "help" || argv[0] == "-h"){
			console.log(" _   _   _____   _       ____");
			console.log("| | | | | ____| | |     |  _ \ ");
			console.log("| |_| | |  _|   | |     | |_) |");
			console.log("|  _  | | |___  | |___  |  __/ ");
			console.log("|_| |_| |_____| |_____| |_|");
			


    
                                

			console.log("THIS IS THE CLI FOR GENERATE A FAST PROJECT IN ANGULARJS\n".grey);
			console.log("Usage".yellow+": ng-make"+ "[keyword]".blue +"[options]".green);
			console.log("\n[keyword]: you can obtain info for usage of the passing keyword");
			console.log("\t---"+"[keyword]".blue+": the keyword are:");
			console.log("\n\t\t"+"project".blue+" => Used for create a new project in angular js");
			console.log("\t\t\t\tUsage: ng-make project nameOfYourApp".yellow);
			console.log("\t\t"+"state".blue+" => Used for create a new state  \n\t\t\t\t"+"!important ( FOR USE THIS YOU MUST BE INSIDE THE PROJECT DIRECTORY )".bgRed.white);
			console.log("\t\t"+"module".blue+" => Used for create a new module in angular js such as bootstrap and others.");
			console.log("\t---[options]".blue+" : it's used for specify the parameters available for all keywords\n For the available options for each keyword you can use:".grey);
			console.log("Usage: ng-make [keyword] help".yellow);
			console.log("\nFOR OTHER INFO GO TO THE WEB SITE(https://www.npmjs.com/package/ng-make)".red);
		}
	}
}


exports.showHelpModule = function(argv){
	if(argv.length==1){
		console.log("ERR: You can't use this command, please try: "+"ng-make module -help".grey);
		console.log("\nFOR OTHER INFO GO AT THE WEB SITE(https://www.npmjs.com/package/ng-make)".red);
		
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
				console.log("\nFOR OTHER INFO GO TO THE WEB SITE(https://www.npmjs.com/package/ng-make)".red);
			
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
		console.log( " __    _  _______         __   __  _______  ___   _  _______ ");
		console.log( "|  |  | ||       |       |  |_|  ||   _   ||   | | ||       |");
		console.log( "|   |_| ||    ___| ____  |       ||  |_|  ||   |_| ||    ___|");
		console.log( "|       ||   | __ |____| |       ||       ||      _||   |___ ");
		console.log( "|  _    ||   ||  |       |       ||       ||     |_ |    ___|");
		console.log( "| | |   ||   |_| |       | ||_|| ||   _   ||    _  ||   |___ ");
		console.log( "|_|  |__||_______|       |_|   |_||__| |__||___| |_||_______|");
		console.log("\nCLI Powered by axc1011".yellow);
		console.log("version:"+version);
		console.log("Using default value for the server")
		console.log("Starting your server in http://localhost:9090");
	}else{
		
	}
	
}

exports.showWebStart = function(){
	
	console.log( "██╗    ██╗███████╗██████╗     ███████╗████████╗ █████╗ ██████╗ ████████╗");
	console.log( "██║    ██║██╔════╝██╔══██╗    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝");
	console.log( "██║ █╗ ██║█████╗  ██████╔╝    ███████╗   ██║   ███████║██████╔╝   ██║   ");
	console.log( "██║███╗██║██╔══╝  ██╔══██╗    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ");
	console.log( "╚███╔███╔╝███████╗██████╔╝    ███████║   ██║   ██║  ██║██║  ██║   ██║   ");
	console.log( " ╚══╝╚══╝ ╚══════╝╚═════╝     ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ");
	console.log( "                                                                        ");
	
}

exports.showModule = function(){
	console.log( "███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗");
	console.log( "████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝");
	console.log( "██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗  ");
	console.log( "██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝  ");
	console.log( "██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗");
	console.log( "╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝");
	console.log( "                                                     ");
}
/*
exports.showInsert(){
	
}

exports.showInitDownload(){
	
}

exports.showFinishDownload(){
	
}*/