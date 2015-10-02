var Clicker = function(button){
	this.button = button;
};


Clicker.prototype.counter = function() {
	for (var i = 0; i <= 50; i ++) {
    	if(document.getElementById(this.counter).clicked == true) {
  			i++;
        	alert("You are visitor number " + i + "!");
        }
    }
};

var siteCounter = new Clicker("btn btn-danger");

siteCounter();