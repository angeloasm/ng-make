/**INFO**
Gli state avranno la seguente forma 
{
	nome,
	url,
	templateUrl,
	controller,
	abstract
}
*/
var stringNEWSTATE = "//%NEW_STATE";
var stringDEFAULT ="//%DEFAULT_STATE";
exports.loadState = function(fs,state){
	var ret = fs.existsSync("state.json");
	if(ret){
		return JSON.parse(fs.readFileSync('state.json', 'utf8'));
	}else{
		return ret;
	}
}

exports.saveState = function(fs,state){
	
		 	fs.open("./state.json",'w+',function(err,fd){
		 		fs.write(fd,JSON.stringify(state));
		 	})
	
}

exports.createNewState = function(fs,stateData,config,isAbstract,defaultState){
	
	var file = fs.readFileSync('settings/config.routes.js','utf8');
	
	//console.log(file);
	
	var str = file.replace(stringNEWSTATE,genStateApp(stateData,isAbstract));
	if(defaultState){
		str = str.replace(stringDEFAULT,genDefaultState(stateData));
	}
	
	fs.open("settings/config.routes.js",'w+',function(err,fd){
		fs.write(fd,str);
	})
	

	
}

function genDefaultState(stateData){
	var jsDefault ="$urlRouterProvider.otherwise("+stateData.url+");\n";
	return jsDefault
}

function genStateApp(state,isAbstract){
	
	var statejs = ".state('"+state.name+"',{\n\t\t\t\t\turl:"+state.url+
								",\n\t\t\t\t\ttemplateUrl:"+state.templateUrl+
								",\n\t\t\t\t\tcontroller:"+state.controller+""
	if(isAbstract){
		statejs+=",\n\t\t\t\t\tabstract:true";
	}
	
					statejs +=	"\n\t\t\t\t}\n\t\t\t)\n\t\t\t"+stringNEWSTATE+"\n";
					return statejs;
}