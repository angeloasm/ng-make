#!/usr/bin/env node
var version = "1.7.2";

var help = require('./help.js');
var settingsMan = require('./setting.js');
var indexGen = require('./indexGenerator.js');
var genBootApp = require('./genBootApp.js');
var moduleManager = require('./moduleManager.js');
var stateManager = require('./stateManager.js');
var shelljs = require('shelljs');
var md5 = require('./calcMD5.js');
var colors     = require('colors');
/*var server = require('./server.js');
var colors     = require('colors'),
		os         = require('os'),
    httpServer = require('./node_modules/http-server/lib/http-server'),
    portfinder = require('portfinder'),
opener     = require('opener');*/
var http = require('http');
var cssGen = require('./styleCSS.js');
var commandManager = require('./commandMan.js');
var readlineSync = require('readline-sync');
var Parallel = require('paralleljs');

var liveServer = require("live-server");
 
var isWeb = false;



var config = [{}];
var dataConfig = {};

var module = [{}];
var moduleData = {};


var states = [{}];
var stateData = {};


var fs = require('fs');
var argv = process.argv.slice(2);

shelljs.exec("clear");
/** OLD
commandManager.cmd(fs,help,settingsMan,indexGen,genBootApp,
	moduleManager,stateManager,shelljs,server,colors,os,httpServer,opener,argv,
	module,moduleData,config,dataConfig,states,stateData,portfinder,commandManager,
	http,version,readlineSync,Parallel,liveServer);**/

commandManager.cmd(fs,help,settingsMan,indexGen,genBootApp,
	moduleManager,stateManager,shelljs,colors,argv,module,moduleData,
	config,dataConfig,states,stateData,commandManager,version,readlineSync,Parallel,liveServer,http,cssGen,isWeb);
	
	
	
var options = {
  host: 'www.angelocarraggi.altervista.org',
  port: 80,
  path: '/ng-make/version.php'
};
	

	http.get(options, function(res) {
	
	  
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			var remoteVers = md5.calcMD5(chunk);
			
			var thisVers = md5.calcMD5(version);
			if(remoteVers == thisVers){
				
			}else{
				//console.log(argv[0]);
				if(argv[0]!="webstart"){
					console.error("\n\n\n Please make update ng-make, do this on your terminal\n"+"npm install -g ng-make".yellow);
				}
				
			}
						
					})	
				  
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});





	
