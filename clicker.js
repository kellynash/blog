var Clicker = function(button){
	this.button = button;
	this.counter = function(){
		var buttons = document.getElementsById("counter");
		var buttonsCount = buttons.length;
			for (var i = 0; i <= buttonsCount; i += 1) {
    			buttons[i].onclick = function(e) {
        		alert("You are visitor number " + i + "!");
        	}
		}
	}
}


var siteCounter = new Clicker("btn btn-danger");

siteCounter();