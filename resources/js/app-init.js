



function loadCommonPage(page,$wrap){	
	return	$.get(  'common/'+   page , '', function (data) {  
			$wrap.append(data); });
}


$(document).ready(function(){
	
});
