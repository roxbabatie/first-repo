var ok = document.getElementsByClassName("ok");
var notOk = document.getElementsByClassName("not-ok");
var myInput = document.getElementById("always-on");
var container = document.getElementById("container");
var field;
var wordNo;
var words;
var firstWord;
var secWord;
console.log(container);

 myInput.addEventListener ("input", function(event) {
 		field = myInput.value.trim();


 		words = field.split(' ');
 		console.log(words[0]);

 		wordNo = words.length;
 		console.log(wordNo);


 		// for (i = 0; i< wordNo; i++) {
 		// 	if (words[i] == " ") {
 		// 		delete words[i];
 		// 	}
 		// }
 		// wordNo = words.length;

 		if (wordNo == 2) {

 				firstWord = words[0].length;
 				secWord = words[1].length;

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