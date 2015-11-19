var Clicker = function(count){
	this.count = count;
};


Clicker.prototype.counter = function() {
	this.count += 1;
	console.log(this.count);
	document.getElementById("counter").innerHTML = this.count;
};

var siteCounter = new Clicker(0);



