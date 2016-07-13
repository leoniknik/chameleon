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

//РЕГИСТРАЦИЯ
function sendRegToServ(){
	var SERVER_URL = "http://localhost:3000/"
	$.ajax({
		url: SERVER_URL+"regcontrol/view",
		type: "GET",
		dataType: "json",
		data:{
			login: $("#nameR").val(),
			password:  $("#passwordR1").val(),
			nickname: $("#nicknameR").val(),
		},
		success: function(response){
			alert(JSON.stringify(response));
		},
		error: function(){
			alert("Ошибка")
		}
	});
}



  
  

