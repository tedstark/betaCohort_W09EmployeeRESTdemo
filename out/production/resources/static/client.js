$(document).ready(function () {
    init();
});

function init() {
    enableButtons();
}
function enableButtons(){
    $("#btnAdd").on("click",postEmployee);
    $("#btnShow").on("click",getRoster);
}
function postEmployee() {
    event.preventDefault();
    var id=Math.floor((Math.random() * 999999) + 99999);
    var fname = $("#entryFName").val();
    var lname = $("#entryLName").val();
    var position = $("#selectPosition").val();
    var salary = parseInt($("#entrySalary").val());
    var newEmployee = {
        id:id,
        fakeid:id,
        fname:fname,
        lname:lname,
        position:position,
        salary:salary
    };
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/employees",
        data: JSON.stringify(newEmployee),
        success: function(response){
            console.log(response)
        }
    })
}
function getRoster() {
    $.ajax({
        type: "GET",
        url: "/employees",
        success: function(response){
            appendRoster(response);
            console.log(response);
        }
    });
}
function appendRoster(response) {
    $("#tableRoster").empty();
    for (var i = 0; i < response._embedded.employees.length; i++) {
        var employee = response._embedded.employees[i];
        $("#tableRoster").append("<tr></tr>");
        var el = $("#tableRoster").children().last();
        el.append("<th scope=\"row\">"+ employee.fakeid+ "</th>\n" +
            "      <td>"+ employee.lname+ "</td>\n" +
            "      <td>"+ employee.fname+ "</td>\n" +
            "      <td>"+ employee.salary+ "</td>\n" +
            "      <td>"+employee.position+"</td>");
    }
}
