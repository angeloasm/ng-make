


exports.cmd = function(fs,help,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,argv,
											module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,http,version,readlineSync){
												console.log(!argv[0]);
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
															console.log("[ OK ]".white+"Created all directory for the project".green.bgBlue);
															console.log("Download angular module".grey);
															shelljs.exec('bower install angular');
	
															moduleData.usageName="";
															moduleData.name="angular";
															moduleData.path='"bower_components/angular/angular.js"';
															moduleManager.insertNewModule(moduleData,module);
															console.log("[ OK ]".bgGreen.white+"Added to setting module "+moduleData.name.bgBlue.green);
	
															console.log("Download angular-ui module".grey);
															shelljs.exec('bower install angular-ui');
															var moduleDatas = {};
															moduleDatas.usageName="'ui.router'";
															moduleDatas.name = "angular-ui-router";
															moduleDatas.path='"bower_components/angular-ui/build/angular-ui.js"';
															moduleManager.insertNewModule(moduleDatas,module);
															console.log("[ OK ]".bgGreen.white+"Added to setting module "+moduleDatas.name.bgBlue.green);
															console.log("[ OK ]".bgGreen.white+"Finish angular-ui".green.bgBlue);
															console.log("Adding Module".grey);
	
															moduleManager.saveModule(fs,module,argv[1]);
															console.log("/----Saved module----/")
															console.log("Configuring your components");
															shelljs.exec('mv bower_components ./'+argv[1]+'/bower_components');
															console.log("Create the configuration for this AngularJS App".grey);
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
															console.log("[ OK ]".bgGreen.white+"Complete your configuration");
															var ret = settingsMan.saveSettings(fs,config);
															genBootApp.createFileAppJS(fs,config,module);
															genBootApp.createFileConfJS(fs,config);
															genBootApp.createFileConfRouteJS(fs,config);
															console.log("[ OK ]".bgGreen.white+"All file has been initializated");
															console.log("***********FINISHED ALL!\n\n".blue);
															console.log("Now go with the terminal into ".green+argv[1].yellow+" with: cd "+argv[1].yellow+"directory and use all command you need!".green);
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
														help.showWebStart();
														server.start(argv,process,os,httpServer,portfinder,opener);
														var exit = false;
														setTimeout(function(){
														/*	command(fs,help,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,argv,
											module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,http,version,readlineSync);*/
														},100)
													
														break;
													}
													case "module":{
														if(help.showHelpModule(argv)==2){
															if(argv[1]=="list"){
															
																var moduleRepo =[{}];
															
																moduleManager.listModuleRepo(http,moduleRepo,commandManager);
															
															}
															if(argv[1]=="install"){
																	var moduleRepo =[{}];
																	var namePackage = argv[2];
																	moduleManager.installModule(moduleManager,http,fs,config,indexGen,moduleRepo,namePackage,shelljs);
																
																
															}
															if(argv[1]=="list-installed"){
																moduleManager.listInstalled(moduleManager,fs);
															}
															//console.log(!(argv[1]=="list")&&!(argv[1]=="install")&&!(argv[1]=="list-installed"));
															if(!(argv[1]=="list")&&!(argv[1]=="install")&&!(argv[1]=="list-installed")){
																//module = moduleManager.loadModule(fs,config)
																//console.log("cisono");
																moduleData = {};
																moduleData.name = argv[1];
																moduleData.usageName=""+argv[1]+"";
																moduleData.path="js/"+argv[1]+".js";
																moduleManager.addModule(moduleData,config,fs,indexGen);
																moduleManager.saveNewModule(fs,moduleData);
															}
													
														
														}
														
														break;
													}
													default :{
														help.showGeneralHelp(argv,version);
													}
												}
											
	
}
exports.cmdServer=function(argv){
	if(argv[0]=="")
	console.log(argv);
}

exports.printModulesRepository = function(moduleRepo){
	console.log("The list of repository available are:".grey);
	moduleRepo.forEach(function(val,id){
		console.log(val.name.red+"-> "+val.description);
	})
}



function command(fs,help,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,argv,
											module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,http,version,readlineSync){
	
	var userName = readlineSync.question('May I have your name? :');
	//console.log('Hi ' + userName + '!');
	var argv=[];
	var argv = userName.split(" ");
	// Handle the secret text (e.g. password).
	
	commandManager.cmd(fs,help,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,argv,
		module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,http,version,readlineSync);
	if(userName=="exit"){
		return 0;
	}else{
		setTimeout(function(){
			command(fs,help,settingsMan,indexGen,genBootApp,
											moduleManager,stateManager,shelljs,server,
											colors,os,httpServer,opener,argv,
											module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,http,version,readlineSync);
		},100);
	}
}