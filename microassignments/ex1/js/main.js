var value;
var go = document.getElementById("progr");
var button;

 var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var listener = function () {
	go.value = getRandomInt(1, 100);
};


button = document.getElementById("btn");
button.addEventListener("click", listener);
