$(document).ready(function(){

	var height = $(window).height();

	ajustesIniciales();


	function ajustesIniciales(){
		
	}


	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor_general").css({
				// "-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 30 + "px"
			});

		}

	});

});