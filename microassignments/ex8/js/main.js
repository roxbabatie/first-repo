var selectOperator = document.getElementById("sel-op");
var aBox = document.getElementById("abox");
var bBox = document.getElementById("bbox");
var res = document.getElementById("resultbox");


selectOperator.addEventListener("change", function(event) {
	var x = selectOperator.value;
	console.log(x);
	var a = aBox.value;
	var b = bBox.value;
	var result = res.value;
	
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


});






console.log(selectOperator);
var add = document.getElementById("op-add");
var substract = document.getElementById("op-substract");
var multiply = document.getElementById("op-multiply");
var divide = document.getElementById("op-divide");


