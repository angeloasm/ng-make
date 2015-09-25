#!/usr/bin/env node

var child_process = require('child_process');
var menu = require('./menu.js');
var settingsMan = require('./setting.js');
var indexGen = require('./indexGenerator.js');
var genBootApp = require('./genBootApp.js');
var moduleManager = require('./moduleManager.js');
var stateManager = require('./stateManager.js');
var shelljs = require('shelljs');
var server = require('./server.js');
var colors     = require('colors'),
		os         = require('os'),
    httpServer = require('./node_modules/http-server/lib/http-server'),
    portfinder = require('portfinder'),
opener     = require('opener');
var open = require('open');
var p = shelljs.exec("pwd");


//shelljs.exec('bower install angular-ui');
/**
+ 
+
**/

//menu.show(process.argv);
//console.log("first");

/*
Varibili usati per la configurazione del programma
*/
var config = [{}];
var dataConfig = {};
/**
* Module json var
*/
var module = [{}];
var moduleData = {};
/**TEST
moduleData.name='ui.router';
module[module.length]=moduleData;**/

var states = [{}];
var stateData = {};

//console.log(indexGen.createIndex());

var fs = require('fs');
var argv = process.argv.slice(2);
var argvx = argv.slice(3);

if(argv[0]=="webstart"){
	server.start(argv,process,os,httpServer,portfinder,opener);
}


/***TEST***/

/**
FUNZIONA, SERVE PER PRELEVARE I VALORI DALL'ARGV
**/
argv.forEach(function(val,index){
	switch(val){
		case 'controller':{
			console.log("hello");
			fs.open("js/"+argv[1]+".js",'w+',function(err,fd){
				fs.write(fd,"app\n.controller('"+argv[1]+"',function($scope)\n{\n}");
			});			
			break;
		}
	}
});

/**
prova creazione cartelle FUNZIONA!
**/
if(argv[0] == "project"){
	console.log("cisono");
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

	/*process.exec('cd '+argv[1], function (err, stdout, stderr){
    	if (err) {
        	console.log("child processes failed with error code: " +
            	err.code);
    	}
    	console.log(stdout);
	});*/
}

/**
prova creazione state...
**/
console.log(argv[0]);
if(argv[0] == "state"){
	console.log("cisono");
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
}

/*dataConfig.appname = "home";
config[config.length] = dataConfig;
var ret = settingsMan.saveSettings(fs,config);*/

/*
config = settingsMan.loadSettings(fs,config);
console.log(config[config.length-1].appname);
*/


/*data.message = "angelo";
jsonVar[1] = data;
jsonVar.forEach(function(val,index){
	console.log(val);
});*/
/* FUNZIONA PER SALVARE L'OGGETTO IN UN FILE 
fs.open("m.js",'w+',function(err,fd){
	fs.write(fd,JSON.stringify(jsonVar));
});		*/




	
