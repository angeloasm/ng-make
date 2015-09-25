exports.createIndexInit = function(appname){
	
var html = '<!DOCTYPE html>'+
								'<html lang="en">'+					
								'<head>'+
								' <meta charset="UTF-8">'+
								'<title>'+appname+'</title>\n</head>'+
								'<body ng-App="'+appname+'"><div ui-sref>\n</div ui-sref>\n'

								
								'</body>\n</html>';
						return html;
}

exports.addLinkStyle = function(){
	
}

exports.insertDependencesConf = function(config,appname,fs,settingsMan){
	var str = fs.readFileSync(appname+'/index.html','utf8');
	var res = str.replace("</body>", settingsMan.generateHTMLRequire(config)+"\n</body>");
	fs.open(appname+"/index.html",'w+',function(err,fd){
		fs.write(fd,res);
	})
}