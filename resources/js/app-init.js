var moduleMap = {
		"side-nav":"left-menu.html"
}




function loadModules(moduleList,$wrap){
	jQuery.ajaxSetup({ async: false });
	for(var iter=0;iter<moduleList.length;iter++) {
		$.get(  'common/'+ moduleMap [  moduleList[iter] ], '', function (data) { $wrap.append(data); });
	}
	jQuery.ajaxSetup({ async: true });
}


$(document).ready(function(){
	
});
