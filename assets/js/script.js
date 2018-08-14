//index page form validation
var firstName;
var lastName;
var qKey;
var passKey;
var fdigi;
var correct;
var given;
var remarks;
var patho = window.location.pathname.split('/');
var loc = patho.length -1
var patho = patho[loc];
function getValid(){
    firstName = document.getElementById("fName").value;
    lastName = document.getElementById("lName").value;
    qKey = document.getElementById("quizKey").value;
    
        
    
    var wrongKey = document.getElementById("wrongKey")
    if(qKey == passKey){
        
        window.location.replace("./quiz.html");
        firstName = localStorage.setItem('firstName',firstName);
        lastName = localStorage.setItem('lastName',lastName);           
    }else{
        wrongKey.removeAttribute("hidden");
        
    }
}


function rmWrongKey(){
    var wrongKey = document.getElementById("wrongKey");
    wrongKey.setAttribute("hidden","");
    document.getElementById("quizKey").value = '';
}


function logout(){
    window.location.replace("./index.html");
}

function adminlogin(){
    var aduname = "admin";
    var adpass = "admin";

    var filadname = document.getElementById('aduName').value;
    var filadpas = document.getElementById('adPass').value;
if(aduname == filadname && adpass == filadpas){
    $('#adminmodal').modal('hide');
    $('#keymodal').modal('show');
}else{
    document.getElementById('wrongadmin').removeAttribute('hidden');
}
}


function generate(){
    var rdigi = Math.round(Math.random() * (99999999 - 10000000)); 
    fdigi = rdigi + 10000000;
    document.getElementById('gen').innerText = fdigi;
} 

function confirmkey(){
    passKey = fdigi;
    $('#keymodal').modal('hide');
    
}

//quiz page mcqs
if(patho == 'quiz.html'){
    timefun(2);
var  firstName = localStorage.getItem('firstName');
var  lastName = localStorage.getItem('lastName');
document.getElementById("user").innerHTML = firstName+" "+lastName;


//questio1-1(
var question1 = {
    question: "Which of the following tasks or elements would be considered back-end?",
    answers: ["Graphic Interface", "Database Programming","PHP Script", "HTML Programming"],
    correct: "PHP Script"
};

var quest1 = document.getElementById("question1-1");
var ans1_1 = document.getElementById("ans1-1text");
var ans1_1chec = document.getElementById("ans1-1");
var ans1_2 = document.getElementById("ans1-2text");
var ans1_2chec = document.getElementById("ans1-2");
var ans1_3 = document.getElementById("ans1-3text");
var ans1_3chec = document.getElementById("ans1-3");
var ans1_4 = document.getElementById("ans1-4text");
var ans1_4chec = document.getElementById("ans1-4");

quest1.innerText = question1.question;

ans1_1.innerText = question1.answers[0];
ans1_1chec.setAttribute("value",question1.answers[0]);

ans1_2.innerText = question1.answers[1];
ans1_2chec.setAttribute("value",question1.answers[1]);

ans1_3.innerText = question1.answers[2];
ans1_3chec.setAttribute("value",question1.answers[2]);

ans1_4.innerText = question1.answers[3];
ans1_4chec.setAttribute("value",question1.answers[3]);


var question2 = {
    question: "What does the acronym WWW stand for?",
    answers: ["World Wacky Walter", "World Wide Web","World Wide Wave", "World Web Wall"],
    correct: "World Wide Web"
};

var quest2 = document.getElementById("question2-1");
var ans2_1 = document.getElementById("ans2-1text");
var ans2_1chec = document.getElementById("ans2-1");
var ans2_2 = document.getElementById("ans2-2text");
var ans2_2chec = document.getElementById("ans2-2");
var ans2_3 = document.getElementById("ans2-3text");
var ans2_3chec = document.getElementById("ans2-3");
var ans2_4 = document.getElementById("ans2-4text");
var ans2_4chec = document.getElementById("ans2-4");

quest2.innerText = question2.question;

ans2_1.innerText = question2.answers[0];
ans2_1chec.setAttribute("value",question2.answers[0]);

ans2_2.innerText = question2.answers[1];
ans2_2chec.setAttribute("value",question2.answers[1]);

ans2_3.innerText = question2.answers[2];
ans2_3chec.setAttribute("value",question2.answers[2]);

ans2_4.innerText = question2.answers[3];
ans2_4chec.setAttribute("value",question2.answers[3]);

//questio3-1

var question3 = {
    question: "URL stands for?",
    answers: ["Universal Reverse Locator", "Universal Record Locator","Uniform Resource Locator", "Unconfigured Resource Locator"],
    correct: "Uniform Resource Locator"
};

var quest3 = document.getElementById("question3-1");
var ans3_1 = document.getElementById("ans3-1text");
var ans3_1chec = document.getElementById("ans3-1");
var ans3_2 = document.getElementById("ans3-2text");
var ans3_2chec = document.getElementById("ans3-2");
var ans3_3 = document.getElementById("ans3-3text");
var ans3_3chec = document.getElementById("ans3-3");
var ans3_4 = document.getElementById("ans3-4text");
var ans3_4chec = document.getElementById("ans3-4");

quest3.innerText = question3.question;

ans3_1.innerText = question3.answers[0];
ans3_1chec.setAttribute("value",question3.answers[0]);

ans3_2.innerText = question3.answers[1];
ans3_2chec.setAttribute("value",question3.answers[1]);

ans3_3.innerText = question3.answers[2];
ans3_3chec.setAttribute("value",question3.answers[2]);

ans3_4.innerText = question3.answers[3];
ans3_4chec.setAttribute("value",question3.answers[3]);

//questio4-1

var question4 = {
    question: "What is the purpose of DNS?",
    answers: ["To configure website", "To provide hosting","To transfer files", "To lookup domains"],
    correct: "To lookup domains"
};

var quest4 = document.getElementById("question4-1");
var ans4_1 = document.getElementById("ans4-1text");
var ans4_1chec = document.getElementById("ans4-1");
var ans4_2 = document.getElementById("ans4-2text");
var ans4_2chec = document.getElementById("ans4-2");
var ans4_3 = document.getElementById("ans4-3text");
var ans4_3chec = document.getElementById("ans4-3");
var ans4_4 = document.getElementById("ans4-4text");
var ans4_4chec = document.getElementById("ans4-4");

quest4.innerText = question4.question;

ans4_1.innerText = question4.answers[0];
ans4_1chec.setAttribute("value",question4.answers[0]);

ans4_2.innerText = question4.answers[1];
ans4_2chec.setAttribute("value",question4.answers[1]);

ans4_3.innerText = question4.answers[2];
ans4_3chec.setAttribute("value",question4.answers[2]);

ans4_4.innerText = question4.answers[3];
ans4_4chec.setAttribute("value",question4.answers[3]);

correct = [question1.correct,question2.correct,question3.correct,question4.correct];
localStorage.setItem('correct',JSON.stringify(correct));

}
var sec = 60;
var min; 
function timefun(min) {
    setInterval(function(){ 
        sec--;
        document.getElementById('timec').innerHTML = "Time Limit: "+min+":"+sec;
        if(sec <= 0){
            min--;
            sec = 60;
        }
        if( min == -1){
            page();
        }
     }, 1000);
}

var temp;
//result page calculations
var query1 = document.getElementsByClassName('a1');
var val1;
function getval1(query1){
for(i = 0; i < query1.length; i++){
    var radio = query1[i];
    if(radio.checked){
        val1 = radio.value;
    }   
}
return val1;
}

var query2 = document.getElementsByClassName('a2');
var val2;
function getval2(query2){
for(i = 0; i < query2.length; i++){
    var radio = query2[i];
    if(radio.checked){
        val2 = radio.value;
    }   
}
return val2;
}

var query3 = document.getElementsByClassName('a3');
var val3;
function getval3(query3){
for(i = 0; i < query3.length; i++){
    var radio = query3[i];
    if(radio.checked){
        val3 = radio.value;
    }   
}
return val3;
}

var query4 = document.getElementsByClassName('a4');
var val4;
function getval4(query4){
for(i = 0; i < query4.length; i++){
    var radio = query4[i];
    if(radio.checked){
        val4 = radio.value;
    }   
}
return val4;

}
var givenAns
given = [];
remarks = [];
var num = 0;
var givenAns = JSON.parse(localStorage.getItem('given'));
var num = JSON.parse(localStorage.getItem('num'));
correct = JSON.parse(localStorage.getItem('correct'));
remarks = localStorage.setItem('remarks',JSON.stringify(remarks));
remarksAns = JSON.parse(localStorage.getItem('remarks'));


function page(){
    window.location.replace("./result.html")
    given = [val1,val2,val3,val4];
    given = localStorage.setItem('given',JSON.stringify(given));
    num = localStorage.setItem('num',num);
    num = localStorage.getItem('num');        
    localStorage.removeItem('num',0);
}

if(patho == 'result.html'){


    for(h = 0; h <= correct.length - 1; h++){
        var roo = document.getElementById('r'+h);
        if(givenAns[h] == correct[h]){
            remarksAns.push("Correct");
            roo.style.backgroundColor = 'rgb(200, 255, 200)'
            num++;
        }else{
            remarksAns.push("Incorrect");
            roo.style.backgroundColor = 'rgb(255, 200, 200)'
        }
    }
    

    var  firstName = localStorage.getItem('firstName');
    var  lastName = localStorage.getItem('lastName');
    document.getElementById("user").innerHTML = firstName+" "+lastName;
    
    if(num == null){
        num = 0;
    }
    var perct = num * 100/correct.length;

    if(perct >= 75){
        document.getElementById("pass").removeAttribute('hidden');
        document.getElementById("pscore").innerHTML = num;
        document.getElementById("ptotal").innerHTML = correct.length;
        document.getElementById('pperct').innerHTML = perct+"%";   


    }else{
        document.getElementById("fail").removeAttribute('hidden');
        document.getElementById("fscore").innerHTML = num;
        document.getElementById("ftotal").innerHTML = correct.length;
        document.getElementById('fperct').innerHTML = perct+"%";   

    }

for(h = 0; h <= correct.length - 1; h++){
    var tans = document.getElementById('tans'+h);
    var rans = document.getElementById('rans'+h);
    
    if(givenAns[h] == null){
        tans.innerHTML = "Unanswered";
        rans.innerHTML = "Incorrect"
    }else{
    
    tans.innerHTML = givenAns[h];
    rans.innerHTML = remarksAns[h];

}}
    localStorage.removeItem(num)
}
