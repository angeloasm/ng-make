/**
module format
{
	"name":"angelo",
	"description":"This is a try module",
	"installcmd":"bower install angelo",
	"usageName":"angelo",
	"path":"bower_components/angelo/dist/script.js"
}
**/

exports.loadModule = function(fs){
	var ret = fs.existsSync("module.json");
	if(ret){
		return JSON.parse(fs.readFileSync('module.json', 'utf8'));
	}else{
		return ret;
	}
}

exports.saveModule = function(fs,module,app){
//	console.log("./"+app+"/");
		 	fs.open("./"+app+"/module.json",'w+',function(err,fd){
		 		fs.write(fd,JSON.stringify(module));
		 	})
	
}

exports.saveNewModule = function(fs,module){
 	fs.open("./module.json",'w+',function(err,fd){
 		fs.write(fd,JSON.stringify(module));
 	})
}

exports.insertNewModule = function(moduleData,module){
	
	var newModule = {};
	newModule = moduleData;
	module[module.length]=moduleData;
	
}
//moduleManager.installModule(moduleManager,http,fs,config,indexGen);
exports.installModule = function(moduleManager,http,fs,config,indexGen,moduleRepo,namePackage,shelljs,cssGen){
	var options = {
	  host: 'www.angelocarraggi.altervista.org',
	  port: 80,
	  path: '/ng-make/module.php'
	};
	

	http.get(options, function(res) {
	
	  //console.log("Got response: " + res.statusCode);
		//console.log("response:\n"+res.response);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
				   
						moduleRepo=JSON.parse(chunk);
						var repoData = {};
						var i=0;
						moduleRepo.forEach(function(val,id){
							if(namePackage == val.name){
								repoData = val;
								i++;
							}
						});
						if(i==0){
							console.log('This package name doesn\'t exists view all package with: \'ng-make module list\'');
							return 0;
						}
						var installcmd = repoData.installcmd;
						var arrCmd = installcmd.split(','); //FOR MORE COMMAND IN THE PACKAGE
						arrCmd.forEach(function(val,id){
							shelljs.exec(val);
						})
						//shelljs.exec(repoData.installcmd);
						if(repoData.usageName=""){
							
						}else{
							var usageName = repoData.usageName;
							var arrUsageName = usageName.split(',');//FOR MORE USAGENAME IN THE PACKAGE
							arrUsageName.forEach(function(val,id){
								var file = fs.readFileSync('settings/app.js','utf8');
								file = file.replace("//%Anchor",","+val+"\n//%Anchor");
								fs.open('settings/app.js','w+',function(err,fd){
									fs.write(fd,file);
								})
							})
							
						}
						
						var pathjs = repoData.pathjs;
						var arrPathJS = pathjs.split(',');
						arrPathJS.forEach(function(val,id){
							indexGen.addingScriptDependency(config,val,fs);
						})
						
						var pathcss = repoData.pathcss;
						var arrPathCSS = pathcss.split(',');
						arrPathCSS.forEach(function(val,id){
							indexGen.addingCSSDependency(val,fs);
						})
						var module = moduleManager.loadModule(fs);
						module[module.length]=repoData;
						moduleManager.saveNewModule(fs,module);
						
				  });
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}

exports.addModule = function(moduleData,config,fs,indexGen){
	
	var file = fs.readFileSync('settings/app.js','utf8');
	file = file.replace("//%Anchor",","+moduleData.usageName+"\n//%Anchor");
	fs.open('settings/app.js','w+',function(err,fd){
		fs.write(fd,file);
	})
	//"use strict";
  // accessing the module in another. 
  // this can be done by calling angular.module without the []-brackets
  //angular.module('mymod')
	fs.open('js/'+moduleData.name+".js",'w+',function(err,fd){
		fs.write(fd, "'use strict';\nangular.module(\'"+moduleData.usageName+"\')\n");
	})
	
	indexGen.addingScriptDependency(config,moduleData.path,fs);
	
}

exports.listModuleRepo = function(http,moduleRepo,cmdMan){
	var options = {
	  host: 'www.angelocarraggi.altervista.org',
	  port: 80,
	  path: '/ng-make/module.php'
	};
	

	http.get(options, function(res) {
	
	  //console.log("Got response: " + res.statusCode);
		//console.log("response:\n"+res.response);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
				   
						moduleRepo=JSON.parse(chunk);
						
						cmdMan.printModulesRepository(moduleRepo);
				  });
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}

exports.listInstalled = function(moduleManager,fs){
	
	console.log( "██╗███╗   ██╗███████╗████████╗ █████╗ ██╗     ██╗     ███████╗██████╗     ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗");
	console.log( "██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║     ██║     ██╔════╝██╔══██╗    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝");
	console.log( "██║██╔██╗ ██║███████╗   ██║   ███████║██║     ██║     █████╗  ██║  ██║    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗  ");
	console.log( "██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║     ██║     ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝  ");
	console.log( "██║██║ ╚████║███████║   ██║   ██║  ██║███████╗███████╗███████╗██████╔╝    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗");
	console.log( "╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═════╝     ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝");
	console.log( "                                                                                                                               ");
	var module = moduleManager.loadModule(fs);
	module.forEach(function(val,id){
		if(id!=0){
			console.log(val.name);
		}
	})
	
}