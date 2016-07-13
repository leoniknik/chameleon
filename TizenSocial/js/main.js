var init = function() {
	document.addEventListener('tizenhwkey', function(e){
		if(e.keyName == "back"){
				var page = document.getElementsByClassName('ui-page-active')[0],
				pageid = page ? page.id : "";
				console.log(pageid);
				if (pageid === "one") {
					try{
						tizen.application.getCurrentApplication().exit();
					}
					catch(ignore){
						
					}
				}else{
					history.back();
				}
				}
		});
	};
window.onload = init;

