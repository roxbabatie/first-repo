var myForm = document.getElementById("my-form");
var myTable = document.getElementById("my-table");
var tableBody = myTable.getElementsByTagName("tbody")[0];

var stars = document.getElementsByClassName('star');
var theCounting = document.getElementById('counter');
var length;

for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    star.addEventListener("click", function() {
        for (var j = 0; j < length; j++) {
            stars[j].classList.remove('active');
        }
        var counting = this.getAttribute("data-value");
        theCounting.innerHTML = counting;
        length = parseInt(counting, 10);
        for (var j = 0; j < length; j++) {
            stars[j].classList.add('active');
        }
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

function isValidName(name) {
    return name.length >= 2;
}

function isValid(ok) {
    var name = document.getElementById("name").value;
    var validName = isValidName(name);
    if (ok && validName) {
        createRow();
        myForm.reset();
    } else {
        if (!ok && !validName) {
            errMsg("Bad name and bad city");
        } else if (!ok) {
            errMsg("Bad city");
        } else {
            errMsg("Bad name");
        }
    }
}
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    isValidCity();
});

function errMsg(msg) {
    if (document.getElementById('errors')) {
        var div = document.getElementById('errors');
        myForm.removeChild(div);
    }
    div = document.createElement("div");
    div.id = "errors";
    div.innerHTML = msg;
    myForm.appendChild(div);
}

function isValidCity() {
    var geocoder = new google.maps.Geocoder();
    var city = document.getElementById("city").value;
    geocoder.geocode( { 'address': city}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log("Ok city");
           isValid(true);
        } else {
            console.log("Bad city");
            isValid(false);
        }
    });
}




