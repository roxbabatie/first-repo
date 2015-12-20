
var myForm = document.getElementById("my-form");
var myTable = document.getElementById("my-table");
var tableBody = myTable.getElementsByTagName("tbody")[0];

var stars = document.getElementsByClassName('star');
var theCounting = document.getElementById('counter');
var length;

for (var i = 0; i < stars.length; i++) {
    var star = stars[i];

    star.addEventListener("click", function() {
        var counting = this.getAttribute("data-value");
        theCounting.innerHTML = counting;
        length = parseInt(counting, 10);
        for (var j = 0; j < length; j++) {
            stars[j].classList.add('active');
        };
    });
}

function getValues(form) {
    var inputs = form.getElementsByTagName("input");
    var name = inputs[0].value;
    var city = inputs[1].value;
    return {
        name: name,
        city: city,
        stars: length
    };
}

function createRow() {
    var tr = document.createElement("tr");
    tr.innerHTML = tmpl("tpl", getValues(myForm));
    tableBody.appendChild(tr);
}

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createRow();
});







