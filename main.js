name_of_student = [];

function submit() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;

    name_of_student.push(n1);
    name_of_student.push(n2);
    name_of_student.push(n3);
    name_of_student.push(n4);

    console.log(name_of_student);

    document.getElementById("output").innerHTML = name_of_student;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_of_student.sort();
    console.log(name_of_student);
    document.getElementById("output").innerHTML = name_of_student;
}