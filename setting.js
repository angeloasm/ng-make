exports.loadSettings = function(fs,config){
	var ret = fs.existsSync("settings.conf");
	if(ret){
		return JSON.parse(fs.readFileSync('settings.conf', 'utf8'));
	}else{
		return ret;
	}
}

exports.saveSettings = function(fs,config){
	
		 	fs.open("./settings.conf",'w+',function(err,fd){
		 		fs.write(fd,JSON.stringify(config));
		 	})
	
}

exports.generateHTMLRequire = function(config){
	var htmlReq = "";
	var i=0;
	config.forEach(function(value,id){
		if(id==0){
			console.log("cai");
		}else{
			if(value.conf!=null){
			htmlReq += templateRequire(value.conf)+"\n";
			console.log(config[id]);
		}
		}
	
		
	})
	return htmlReq;
	
}

var templateRequire = function(srcfile){
	var linkreq = '<script type="text/javascript" src="'+'/settings/'+srcfile+'"></script>';
	return linkreq;
}