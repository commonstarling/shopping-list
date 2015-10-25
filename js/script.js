$(document).ready(function() {
	$("#task").keydown(function(e) {
		if(e.keyCode == 13) {
			alert("You hit enter");
		}
	})
});