var myval = true;
exports.getValue=function(){
	return myval;
}

exports.setValue=function(vals){
	myval = vals;
}

exports.sleep = function sleep(time) {
    var stop = new Date().getTime();
		setTimeout(function(){
			
		},100);
		
}