var selectOperator = document.getElementById("sel-op");
var aBox = document.getElementById("abox");
var bBox = document.getElementById("bbox");
var res = document.getElementById("resultbox");
var x;
var a;
var b;
var result;


function go(){
	x = selectOperator.value;
	a = aBox.value;
	b = bBox.value;
	result = res.value;

	if ((a == "") || (b == "")){
		result = "";
	}
	else {
		switch (x) {
			case "add":
					res.value = parseFloat(a) + parseFloat(b);
					break;
			case "substract":
					res.value = parseFloat(a) - parseFloat(b);
					break;
			case "multiply":
					res.value = parseFloat(a) * parseFloat(b);
					break;
			case "divide":
					if (parseFloat(b) == 0) {
							res.value = "NaN";
					}
					else {
							res.value = parseFloat(a) / parseFloat(b);
					}
					break;
		}
	}
}

selectOperator.addEventListener("change", function(event) {
		go();

});
aBox.addEventListener("input", function(event) {
		go();

});
bBox.addEventListener("input", function(event) {
		go();

});



