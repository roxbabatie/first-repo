var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var container = document.getElementById("container");
var birthday;

function populateSelect(target, min, max){
	if (!target){
		return false;
	}
	else {
		var min = min || 1;
		var	max = max || min;
		select = document.getElementById(target);
		for (var i = min; i<=max; i++){
			var opt = document.createElement('option');
			opt.value = i;
			opt.innerHTML = i;
			select.appendChild(opt);
		}
	}
}

populateSelect('day',1,31);
populateSelect('month',1,12);
populateSelect('year',1940, 2015);

function validInputs() {
	return !((year.value == "default") || (month.value == "default") || (day.value == "default"));
}

year.addEventListener("change", function(event){
	if (validInputs()) {
		birthday = new Date(year.value, parseInt(month.value) - 1, day.value);
		//console.log(birthday.toDateString());
		checkAge(birthday);
	}
});

month.addEventListener("change", function(event){
	if (validInputs()) {
		birthday = new Date(year.value,parseInt(month.value)-1,day.value);
		checkAge(birthday);
	}
});

day.addEventListener("change", function(event){
	birthday = new Date(year.value,parseInt(month.value)-1,day.value);
	if (validInputs()) {

		checkAge(birthday);
	}
});

function checkAge(bday) {
	var eighteenYearsAgo = new Date();

  	eighteenYearsAgo.setYear(eighteenYearsAgo.getFullYear() - 18);
	eighteenYearsAgo.setHours(0);
  	eighteenYearsAgo.setMinutes(0);
  	eighteenYearsAgo.setSeconds(1);

  	if (bday.getTime() > eighteenYearsAgo.getTime()) {
    	console.log("You must be at least 18 years of age.");
		container.classList.add("under");
		var a = document.createElement('a');
		var linkText = document.createTextNode("Go to Disney.com");
		a.appendChild(linkText);
		a.title = "my title text";
		a.href = "http://disney.com";
		container.appendChild(a);

  	}
	else {
		container.classList.add("over");
		var a = document.createElement('a');
		var linkText = document.createTextNode("Go to Disney.com anyways");
		a.appendChild(linkText);
		a.title = "my title text";
		a.href = "http://disney.com";
		container.appendChild(a);
  		console.log("good enough");
  	}
}


