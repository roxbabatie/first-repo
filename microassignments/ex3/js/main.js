xAbs = document.getElementById("x-abs");
yAbs = document.getElementById("y-abs");

xRel = document.getElementById("x-rel");
yRel = document.getElementById("y-rel");

var width = window.innerWidth;
var height = window.innerHeight;

window.addEventListener("resize", function () {
	width = window.innerWidth;
	height = window.innerHeight;
})


document.addEventListener("mousemove", function(event) {

	var clientX = event.clientX;
	var clientY = event.clientY;

	xAbs.value = clientX;
	yAbs.value = clientY;

	xRel.value = Math.round(clientX/width * 100) + "%";
	yRel.value = Math.round(clientY/height * 100) + "%";


});