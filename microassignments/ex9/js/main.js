var d = document.getElementById("day");
var m = document.getElementById("month");
var y = document.getElementById("year");
var container = document.getElementById("container");
var birthday;

y.addEventListener("change", function(event){
		birthday = new Date(y.value,m.value,d.value);
		console.log(birthday.toDateString());
		checkAge(birthday);
});

m.addEventListener("change", function(event){
		birthday = new Date(y.value,m.value,d.value);
		checkAge(birthday);
		console.log(birthday.toDateString());
});


d.addEventListener("change", function(event){
		birthday = new Date(y.value,m.value,d.value);
		checkAge(birthday);
		console.log(birthday.toDateString());
});


function checkAge(bday)
{
  var eighteenYearsAgo = new Date();

  eighteenYearsAgo.setYear(eighteenYearsAgo.getFullYear() - 18);
  eighteenYearsAgo.setHours(0);
  eighteenYearsAgo.setMinutes(0);
  eighteenYearsAgo.setSeconds(1);

  if (bday.getTime() > eighteenYearsAgo.getTime()) {

    console.log("You must be at least 18 years of age.");
  } else {
  	container.classList.add("over");
  	console.log("good enough");
  }
}


