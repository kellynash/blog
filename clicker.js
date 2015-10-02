var Clicker = function(button){
	this.button = button;
	this.counter = function(){
			for (var i = 0; i <= 50; i ++) {
    			if(document.getElementById('counter').clicked == true) {
  					i++;
        			alert("You are visitor number " + i + "!");
				}
    		
        	}
	}
}




var siteCounter = new Clicker("btn btn-danger");

siteCounter();