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