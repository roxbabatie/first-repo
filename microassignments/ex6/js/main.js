var myInput = document.getElementById("always-on");
var container = document.getElementById("container");

myInput.addEventListener ("input", function(event) {
 	var field = myInput.value.trim();
 	var words = field.split(' ');
 	var wordNo = words.length;



 		// for (i = 0; i< wordNo; i++) {
 		// 	if (words[i] == " ") {
 		// 		delete words[i];
 		// 	}
 		// }
 		// wordNo = words.length;

 	if (wordNo == 2) {

 			var firstWord = words[0].length;
 			var secWord = words[1].length;

 			if ((firstWord >= 3) && (secWord >= 3)) {
 					container.classList.add("valid");
 					console.log(container);
 			}	
 			else{
 					container.classList.remove("valid");
 			};
 	
 		}
 	else {
 			container.classList.remove("valid");
 	}

 });