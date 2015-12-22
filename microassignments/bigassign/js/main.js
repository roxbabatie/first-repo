var myForm = document.getElementById("my-form");
var myTable = document.getElementById("my-table");
var tableBody = myTable.getElementsByTagName("tbody")[0];

var stars = document.getElementsByClassName('star');
var theCounting = document.getElementById('counter');
var length;

var count = document.getElementById("count");

var store = [];

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
function createRow(formData) {
    var tr = document.createElement("tr");
    tr.innerHTML = tmpl("tpl", formData);
    tableBody.appendChild(tr);
}

function isValidName(name) {
    return name.length >= 2;
}

function isValid(ok) {
    var name = document.getElementById("name").value;
    var validName = isValidName(name);
    var data = getValues(myForm);
    if (ok && validName) {
        for (var j = 0; j < length; j++) {
            stars[j].classList.remove('active');
        }
        //createRow(data);
        myForm.reset();
        store.push(data);
        //console.log(store);
        render();


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
var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(44.270, 26.100);
    var mapOptions = {
        zoom: 8,
        center: latlng
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
initialize();
function isValidCity() {
    var geocoder = new google.maps.Geocoder();
    var city = document.getElementById("city").value;
    geocoder.geocode( { 'address': city}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log("Ok city");
            map.setCenter(results[0].geometry.location);
            addMarker(results[0].geometry.location);
            isValid(true);
        } else {
            console.log("Bad city");
            isValid(false);
        }
    });
}
var markers = [];
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}
tableBody.addEventListener("click", function (event) {
    if (isRemoveBtn(event.target)) {
        removeRow(event.target);
    }
});


var isRemoveBtn = function (target) {
    return target.classList.contains("remove-btn");
}

var updateTotal = function () {
    count.innerHTML = store.length;

    if (store.length != 0) {
        var sum = 0;
        for (var i=0; i < store.length; i++) {
            sum += store[i].stars;
        }
        calc.innerHTML = Math.ceil(sum/store.length) + "/5";
    } else {
        calc.innerHTML = "0";
    }
}

var getIndexOfButton = function (target) {
    var tr = target.parentNode.parentNode;
    var allTrs = tableBody.getElementsByTagName('tr');
    allTrs = [].slice.call(allTrs);
    var index = allTrs.indexOf(tr);
    return index;
}

var removeRow = function (target) {
    var index = getIndexOfButton (target);
    store.splice(index, 1);
    setMapOnAll(null);
    markers.splice(index, 1);
    setMapOnAll(map);
    //removeFromStore(index);
    render();

}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

//var removeFromStore = function (index) {
//    store.splice(index, 1);
//}

var populateTable = function () {
    tableBody.innerHTML = '';
    for (var i = 0; i < store.length; i++) {
        var data = store[i];
        createRow(data);

    }
}
var render = function () {
    populateTable();
    updateTotal();
}




