

exports.cmd = function(fs,menu,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,open,argv,
											module,moduleData,config,dataConfig,states,stateData,portfinder){
												
												switch(argv[0]){
													
													case "project":{
														if(argv[1]){
															if(!fs.exists(argv[1])){
																fs.mkdirSync(argv[1]);
															}
															if(!fs.exists(argv[1]+"/js")){
																fs.mkdirSync(argv[1]+"/js");
															}
															if(!fs.exists(argv[1]+"/css")){
																fs.mkdirSync(argv[1]+"/css");
															}
															if(!fs.exists(argv[1]+"/img")){
																fs.mkdirSync(argv[1]+"/img");
															}
															if(!fs.exists(argv[1]+"/settings")){
																fs.mkdirSync(argv[1]+"/settings");
															}
															if(!fs.exists(argv[1]+"/template")){
																fs.mkdirSync(argv[1]+"/template");
															}
															console.log("Created all directory for the project".green.bgBlue);
															console.log("Download angular module".grey);
															shelljs.exec('bower install angular');
	
															moduleData.name="";
															moduleData.path='"bower_components/angular/angular.js"';
															moduleManager.insertNewModule(moduleData,module);
															console.log("Added to setting module "+moduleData.name.bgBlue.green);
	
															console.log("Download angular-ui module".grey);
															shelljs.exec('bower install angular-ui');
															var moduleDatas = {};
															moduleDatas.name="'ui.router'";
															moduleDatas.path='"bower_components/angular-ui/build/angular-ui.js"';
															moduleManager.insertNewModule(moduleDatas,module);
															console.log("Added to setting module "+moduleDatas.name.bgBlue.green);
															console.log("Finish angular-ui".green.bgBlue);
															console.log("Adding Module".grey);
	
															moduleManager.saveModule(fs,module,argv[1]);
															console.log("/----Saved module----/")
	
															shelljs.exec('mv bower_components ./'+argv[1]+'/bower_components');
	
															dataConfig.appname = argv[1];
															dataConfig.conf = 'app.js';
															config[config.length] = dataConfig;
	
															var dataConfig = {};
															dataConfig.conf = 'config.js';
															config[config.length] = dataConfig;
	
															var dataConfig ={};
															dataConfig.conf = 'config.routes.js';
	
															config[config.length] = dataConfig;
	
															var html = indexGen.createIndexInit(argv[1]);
	
															fs.open(argv[1]+'/index.html','w+',function(err,fd){
																fs.write(fd,html);
																indexGen.insertDependencesConf(config,argv[1],fs,settingsMan);
															})
															var ret = settingsMan.saveSettings(fs,config);
															genBootApp.createFileAppJS(fs,config,module);
															genBootApp.createFileConfJS(fs,config);
															genBootApp.createFileConfRouteJS(fs,config);
	
	
															server.start(argv,process,os,httpServer,portfinder,opener,null,null,'./'+argv[1]);
															console.log("***********FINISHED ALL!");
															console.log("Now you go with terminal in "+argv[1]+" directory and use all command!")
														}
														else{
															console.log("Error you need the name of project that you want create".bgWhite.red);
															console.log("Usage".yellow+": ng-make project nameOfProject");
														}
														break;
													}
													case "state":{
														config = settingsMan.loadSettings(fs,config);
														var nameState = argv[1];

														if(nameState=="-h"||nameState=="--help"||nameState=="help"){
		
														}else{
															var defaultState = false;
															var isAbstract = false;
															argv.forEach(function(val,id){
			
																	if(val=="abstract"){
																		isAbstract = true;
																	}
																	if(val=="default"){
																		defaultState = true;
																	}
															});
															console.log(isAbstract);
															if(isAbstract){
																stateData.name=nameState;
																stateData.url = "'/"+nameState+"'";
																stateData.templateUrl = "'template/"+nameState+".html'";
																stateData.controller = "'"+nameState+"CTRL'";
																stateData.isAbstract = "true";
															}else{
			
																	stateData.name=nameState;
																	stateData.url = "'/"+nameState+"'";
																	stateData.templateUrl = "'template/"+nameState+".html'";
																	stateData.controller = "'"+nameState+"CTRL'";
			
															}
															console.log(stateData);
															stateManager.createNewState(fs,stateData,config,isAbstract,defaultState);
															var paths = "js/"+stateData.name+"CTRL.js";
															indexGen.addingScriptDependency(config,paths,fs);
															fs.open(paths,'w+',function(err,fd){
																fs.write(fd,"app\n.controller('"+stateData.name+"CTRL',function($scope)\n\t{\n\t})");
															});
															fs.open("template/"+stateData.name+".html",'w+',function(err,fd){
			
															});		
														}
														break;
													}
													case "webstart":{
														server.start(argv,process,os,httpServer,portfinder,opener);
														break;
													}
													
												}
	
}