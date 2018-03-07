$(document).ready(function () {
    init();
});

function init() {
    enableButtons();
    generateEmps()
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
            console.log(response);
            showNew(response);
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
function showNew(response) {
    $("#tableNew").empty();
    // for (var i = 0; i < response._embedded.employees.length; i++) {
    //     var employee = response._embedded.employees[i];
        var employee = response;
        $("#tableNew").append("<tr></tr>");
        var el = $("#tableNew").children().last();
        el.append("<th scope=\"row\">"+ employee.fakeid+ "</th>\n" +
            "      <td>"+ employee.lname+ "</td>\n" +
            "      <td>"+ employee.fname+ "</td>\n" +
            "      <td>"+ employee.salary+ "</td>\n" +
            "      <td>"+employee.position+"</td>");
        $("#addMessage").text("Employee Added!");
    }

function appendRoster(response) {
    $("#tableRoster").empty();
    $("#tableNew").empty();
    $("#addMessage").text("");
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
function randName() {
    var name = "";
    var range = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 6; i++)
        name += range.charAt(Math.floor(Math.random() * range.length));
    return name;
}
function randFname() {
    var array = ['Jake', 'Koddie', 'Joan', 'Ted', 'Mark', 'Manny', 'Lori', 'Kym', 'Scott','Zech'];
    var fname = array[Math.floor(Math.random() * array.length)];
    return fname;
}
function randLname() {
    var array = ['Taylor', 'Becker', 'Adams', 'Stark', 'Feinman', 'Aguilar', 'Tie-Shue', 'Hsu', 'Bromander','Heneveld'];
    var lname = array[Math.floor(Math.random() * array.length)];
    return lname;
}
function randPos() {
    var array = ['Buyer', 'Cashier', 'Greeter', 'HR', 'Manager', 'Security'];
    var position = array[Math.floor(Math.random() * array.length)];
    return position;
}
function randSal() {
    var rand=Math.floor((Math.random() * 45) + 45);
    var salary=rand*1000;
    return salary;
}
function generateEmps() {
    for (var i = 0; i < 10; i++) {
        var id = Math.floor((Math.random() * 499999) + 500000);
        var fname = randFname();
        var lname = randLname();
        var position = randPos();
        var salary = randSal();
        var newEmployee = {
            id: id,
            fakeid: id,
            fname: fname,
            lname: lname,
            position: position,
            salary: salary
        };
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "/employees",
            data: JSON.stringify(newEmployee),
            success: function (response) {
                console.log(response)
            }
        });
    }
}