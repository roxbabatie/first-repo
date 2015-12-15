var x;
var sat;

var width = window.innerWidth;
var height = window.innerHeight;

document.addEventListener("mousemove", function(event) {

	var clientX = event.clientX;
	var clientY = event.clientY;

	x = Math.round(clientX/width * 100);
	sat = Math.round(clientY/height * 100) + "%";
	hue = x/100*360;
	
	var color = "hsl(" + hue + "," + sat +", 50%)";
	document.body.style.backgroundColor = color;

});

