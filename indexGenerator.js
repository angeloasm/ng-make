exports.createIndexInit = function(appname){
	
var html = '<!DOCTYPE html>\n'+
								'<html lang="en">\n'+					
								'\t<head>\n'+
								' \t\t<meta charset="UTF-8">\n'+
								'\t\t<title>'+appname+'</title>\n\t</head>\n'+
								'\t<body ng-App="'+appname+'">\n\t\t<div ui-view>\n\t\t</div>\n'+
								'\t</body>\n</html>';
						return html;
}

exports.addLinkStyle = function(){
	
}

exports.insertDependencesConf = function(config,appname,fs,settingsMan,module){
	var str = fs.readFileSync(appname+'/index.html','utf8');
	//console.log(settingsMan.generateHTMLRequire(config));
	var res = str.replace("</body>", "<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js\"></script>\n"+settingsMan.generateHTMLRequire(config)+"\n</body>");
	//console.log(res);
	fs.open(appname+"/index.html",'w+',function(err,fd){
		fs.write(fd,res);
	})
}

exports.addingScriptDependency = function(config,path,fs){
	var fileIndex = fs.readFileSync("index.html",'utf8');
	var res = fileIndex.replace("</body>","<script type=\"text/javascript\" src=\""+path+"\"></script>");
	fs.open("index.html",'w+',function(err,fd){
		fs.write(fd,res);
	})
}