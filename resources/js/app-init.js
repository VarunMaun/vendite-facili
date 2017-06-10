



function loadCommonPage(page,$wrap){	
	return	$.get(  'common/'+   page +'?r='+Math.random()  , '', function (data) {  
			$wrap.append(data); });
}


$(document).ready(function(){
	
});
