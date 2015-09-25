var plugin =[{}];
exports.loadPluginAngular = function(fs){
	var ret = fs.existsSync("plugin.conf");
	if(ret){
		plugin = JSON.parse(fs.readFileSync('plugin.conf', 'utf8'));
	}else{
		plugin = ret;
	}
}

exports.savePluginAngular = function(){
	fs.exists("plugin.conf", function(exists) {
	    // console.log("settings.conf" + " exists? " + exists);
		 if(!exists){
		 	fs.open("./plugin.conf",'w+',function(err,fd){
		 		fs.write(fd,JSON.stringify(plugin));
		 	})
		 }
	});
}

exports.getPluginInstalled = function(){
	return plugin;
}

exports.setPlugin = function(){
	var dataPlug = {};
	
}