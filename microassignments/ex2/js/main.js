var stars = document.getElementsByClassName('star');
var theCounting = document.getElementById('counter');

for (var i = 0; i < stars.length; i++) {
		var star = stars[i];

		star.addEventListener("mouseover", function() {
				var counting = this.getAttribute("data-value");
				theCounting.value = counting;

				var length = parseInt(counting, 10);

				for (var j = 0; j < length; j++) {
					stars[j].classList.add('active');
				};
		});

		star.addEventListener("mouseout", function (){

				for (var j = 0; j< stars.length; j++) {
					stars[j].classList.remove('active');
				};
		});
}






