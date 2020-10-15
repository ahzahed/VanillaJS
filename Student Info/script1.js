var message = "Roll 1"
var data = ""
var selected_student = 1
var student = {
    "1": {
        "stname": "Hamza",
        "address": "Mirpur",
        "CGPA": 3.0
    },
    "2": {
        "stname": "Hemel",
        "address": "Jigalota",
        "CGPA": 3.55
    },
    "3": {
        "stname": "Sabu",
        "address": "Feni",
        "CGPA": 3.66
    }
}
function firstStudent(key = "") {
    selected_student = 1
    console.log(student[selected_student])
    message = "Roll 1"
    document.getElementById("message").innerHTML = message
}
function secondStudent(key = "") {
    selected_student = 2
    console.log(student[selected_student])

    message = "Roll 2"
    document.getElementById("message").innerHTML = message
}
function thirdStudent(key = "") {
    selected_student = 3
    console.log(student[selected_student])

    message = "Roll 3"
    document.getElementById("message").innerHTML = message
}

function stname(key = "") {
    var std = student[selected_student]
    console.log(std)
    data = `Student name: ${std["stname"]}`
    document.getElementById("data").innerHTML = data
}

function address(key = "") {
    var std = student[selected_student]
    console.log(std)
    data = `Student address: ${std["address"]}`
    document.getElementById("data").innerHTML = data
}

function cgpa(key = "") {
    var std = student[selected_student]
    console.log(std)
    data = `Student cgpa: ${std["CGPA"]}`
    document.getElementById("data").innerHTML = data
}

document.getElementById("message").innerHTML = message
