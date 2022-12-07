



// Scoren til spilleren, vil gå opp for hvert riktig svar
var score = 0;


// Spørsmålene 
var questions = [
    {
        prompt: "Hva koster 50 kroner og har sjokolade på seg?",
        answer: "par"
    },
    {
        prompt: "Hva er den beste monster",
        answer: "pacific"
    },
    {
        prompt: "Hvilken type male er Iulian",
        answer: "beta"
    }

];


// Variabel looper gjennom de forskjellige spørsmålene
var i = 0;


// Starter funksjonen når siden åpnes
pickQuestionHeader();


// Funskjonen gjør at overskriften blir byttet til det valgte spørsmålet
function pickQuestionHeader() {

    var questionHeader = document.getElementById("questionHeader");

    questionHeader.innerHTML = questions[i].prompt
}



// Funksjon som sammenligner user input til svaret på spørsmålet og går til neste sprsmål med mindre quiz er ferdig
function answerCompare() {

    var response = document.getElementById("response").value
    var answer = questions[i].answer

    if (response === answer) {
        score++;
    }

    i++;

    if (i < questions.length) {
        pickQuestionHeader()
    } else {
        afterSubmit();
    }

}


// Funksjon for svaret etter man er ferdig med quizen

function afterSubmit() {

    var pictures = ["images/walter-white-falling.gif", "images/american_pyscho.gif", "images/homelander.gif", "images/gigachad.gif"];

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("number_correct").innerHTML = "You got " + score + "/" + questions.length + " correct.";

    document.getElementById("picture").src = pictures[score];

}



/*
for (var i=0; i < questions.length; i++ ) {


  

    document.write("<h1>"+ questions[i].prompt + "</h1>")

    
    
    var answer = questions[i].answer

   
    var response = document.getElementById("response").value

    if(response == answer) {
      score++;
      alert("wallah")
      
    } else {
     
    } 
  }



    // variabel som gjør at spørsmålene som blir valgt er tilvelig hver gang
    
    let myQuestion = questions[Math.floor(Math.random() * questions.length)]
    


    // funkksjon som velger et spørsmål 
    function pickQuestion() {

    
        return (myQuestion);
    
}


    
    // henter overskriften på siden og lagrer det i en variabel
    var questionHeader = document.getElementById("questionHeader");
    
    // bytter skriften i overskriften til spørsmålet valgt i pickquesition
    questionHeader.innerHTML = pickQuestion().prompt
    





// funksjon som gjør at hvis det man skriver inn på siden er det samme som svaret til spørsmålet får man pluss ett poeng
function answerCompare() {

        var response = document.getElementById("response").value
        var answer = pickQuestion().answer

        if (response === answer) {
            score++;
            alert('correct');
        } else {
            alert('wrong');
        }
    
}





function wallah(){
alert("you got " + score + "/" + questions.length + " questions right");
}




 for (var i=0; i < questions.length; i++ ) {
   var response = window.prompt(questions[i].prompt);
   if(response == questions[i].answer) {
     score++;
     
   } else {
    
   } 
 }
 
 alert("you got " + score + "/" + questions.length + " questions right");
 
 */