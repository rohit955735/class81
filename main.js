nameofthestudent=[];
function submit(){
    var display_student_array = [];
    for(var j=1; j<=4; j++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        nameofthestudent.push(name_of_the_student);
    
    }
    console.log(nameofthestudent);
    var length = nameofthestudent.length;
    console.log(length);
    for(var k=0; k<length; k++){
        display_student_array.push("<h4>name-"+nameofthestudent[k]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove = display_student_array.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";

    }
    function sorting(){
        nameofthestudent.sort();
        console.log(nameofthestudent);
        var dissplaysort = [];
        var length = nameofthestudent.length;
    console.log(length);
    for(var k=0; k<length; k++){
        dissplaysort.push("<h4>name-"+nameofthestudent[k]+"</h4>");
        console.log(dissplaysort);
    }
    var remove = dissplaysort.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    }
