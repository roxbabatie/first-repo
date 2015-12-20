var myForm = document.getElementById("my-form");
var myTable = document.getElementById("my-table");
var tableBody = myTable.getElementsByTagName("tbody")[0];

function getValues(form) {
    var inputs = form.getElementsByTagName("input");
    var name = inputs[0].value;
    var city = inputs[1].value;
    return {
        name: name,
        city: city
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







