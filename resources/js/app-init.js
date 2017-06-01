var initDrawer = function(){
	
	var snapper = new Snap({
		element: document.getElementById('content'),
        disable: 'right'
	});
	
	UpdateDrawers = function(){
		var state = snapper.state(),
			towards = state.info.towards,
			opening = state.info.opening;
		if(opening=='right' && towards=='left'){
		//	$('#left-drawer').removeClass('active-drawer');
		} else if(opening=='left' && towards=='right') {
			$('#left-drawer').addClass('active-drawer');
		}
	};
	
	snapper.on('drag', UpdateDrawers);
	snapper.on('animating', UpdateDrawers);
	snapper.on('animated', UpdateDrawers);
	
	
	$('#toggle-left').on('click', function(){
		snapper.open('left');
	});
	
	
};

var initDesktop = function(){
	window.addEventListener('touchstart', function () { isScrolling = false; });
	  window.addEventListener('touchmove', function () { isScrolling = true; });
	  window.addEventListener('touchend', touchend);
	  window.addEventListener('click', /*function (e) { if (getTarget(e)) {e.preventDefault();} }*/ touchend); ///<--
	  window.addEventListener('popstate', popstate);
	  window.PUSH = PUSH;

}


$(document).ready(function(){
	initDrawer();
	
});
