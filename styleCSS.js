exports.loadCSSUsed = function(){
	
}

exports.saveCSSUsed = function(){
	
}


exports.createCSSFile = function(fs,config){
	
	fs.open(config[1].appname+"/css/style.css",'w+',function(err,fd){
		fs.write(fd,"/*%STYLESHEET*/");
	})
}

exports.addNewImport = function (fs,path){
	var cssFile = fs.readFileSync('./css/style.css','utf8');
	var newCSS = cssFile.replace("/*%STYLESHEET*/","@import \"../"+path+"\"\n/*STYLESHEET*/");
	fs.open('./css/style.css','w+',function(err,fd){
		fs.write(fd,newCSS);
	})
}