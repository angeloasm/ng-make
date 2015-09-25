exports.createFileAppJS = function(fs,config,module){
	
	config.forEach(function(val,id){
		if(id!=0){
		fs.open(config[1].appname+'/settings/'+val.conf,'w+',function(err,fd){
			fs.write(fd,genAppJS(config,module));
		})
	}
	})
	
	
}

function genModuleList(module){
	var list="";
	module.forEach(function(val,id){
		if(id!=0){
			console.log(id);
			if(!val.name){
				
			}else{
				if(id!=1){
					list += ",\n";
				}
			list += val.name;
		}
		}
	})
	return list;
}


function genAppJS(config,module){
	var jsApp;
	var jsAnchor = "//%Anchor\n";
	jsApp="var app = angular.module('"+config[1].appname+"',[\n"+genModuleList(module)+"\n"+jsAnchor+"])";
	return jsApp;
}

exports.createFileConfJS = function(fs,config){
	var js="app\n.run(\n\t['$rootScope','$state','$stateParams',\n\t\tfunction($rootScope,$state,$stateParams){\n\t\t\t$rootScope.$state=$state;\n\t\t\t$rootScope.$stateParams=$stateParams;\n\t\t}\n\t]\n)";
	fs.open(config[1].appname+'/settings/config.js','w+',function(err,fd){
		fs.write(fd,js);
	})
	
}

exports.createFileConfRouteJS = function(fs,config,state){
	var jsRoute = "app\n.config(\n\t['$stateProvider','$urlRouterProvider',\n\t\tfunction($stateProvider,$urlRouterProvider){\n\t\t\t//%DEFAULT_STATE\n\t\t\t$stateProvider\n\t\t\t\t//%NEW_STATE\n\t\t}\n\t]\n)";
	
	fs.open(config[1].appname+"/settings/config.routes.js","w+",function(err,fd){
		fs.write(fd,jsRoute);
	})
}