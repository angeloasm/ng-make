/**
Ogni module deve avere un campo name che contiene i nomi;
I moduli sono composti nel seguente modo:
{
	name:'',
	path:'',
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
