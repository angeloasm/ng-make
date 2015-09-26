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

exports.loadModule = function(fs,config){
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

exports.insertNewModule = function(moduleData,module){
	
	var newModule = {};
	newModule = moduleData;
	module[module.length]=moduleData;
	
}
//moduleManager.installModule(moduleManager,http,fs,config,indexGen);
exports.installModule = function(moduleManager,http,fs,config,indexGen,moduleRepo,namePackage,shelljs)
{
	var options = {
	  host: 'www.angelocarraggi.altervista.org',
	  port: 80,
	  path: '/ng-make/index.php'
	};
	

	http.get(options, function(res) {
	
	  //console.log("Got response: " + res.statusCode);
		//console.log("response:\n"+res.response);
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
				   
						moduleRepo=JSON.parse(chunk);
						var repoData = {};
						moduleRepo.forEach(function(val,id){
							if(namePackage == val.name){
								repoData = val;
								
							}
						});
						//HO IL PACCHETTO
						//AVVIO IL DOWNLOAD 
						shelljs.exec(repoData.installcmd);
						
						var file = fs.readFileSync('settings/app.js','utf8');
						file = file.replace("//%Anchor",","+repoData.usageName+"\n//%Anchor");
						fs.open('settings/app.js','w+',function(err,fd){
							fs.write(fd,file);
						})
	
						indexGen.addingScriptDependency(config,repoData.path,fs);
						
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
	  path: '/ng-make/index.php'
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