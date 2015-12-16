var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var r; 
var g;
var b;
var color;



red.addEventListener ("change", function(event) {
	r = red.value;
	color = "rgb(" + r + "," + green.value +", "+ blue.value +")";
	console.log(color)
	document.body.style.backgroundColor = color;
});


green.addEventListener ("change", function(event) {
	g = green.value;
	color = "rgb(" + red.value + ","+ g +", "+ blue.value +")";
	console.log(color);
	document.body.style.backgroundColor = color;
});


blue.addEventListener ("change", function(event) {
	b = blue.value;
	color = "rgb(" + red.balue + ","+ green.value +", "+ b +")";
	document.body.style.backgroundColor = color;
});
	