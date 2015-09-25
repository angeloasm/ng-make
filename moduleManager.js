exports.loadSettings = function(fs,config){
	var ret = fs.existsSync("module.json");
	if(ret){
		return JSON.parse(fs.readFileSync('module.json', 'utf8'));
	}else{
		return ret;
	}
}

exports.saveSettings = function(fs,config){
	
		 	fs.open("./module.json",'w+',function(err,fd){
		 		fs.write(fd,JSON.stringify(config));
		 	})
	
}

exports.insertNewModule = function(moduleData,module){
	
	var newModule = {};
	newModule = moduleData;
	module[module.length]=newModule;
	
}
