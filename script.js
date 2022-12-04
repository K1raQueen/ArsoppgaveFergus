


// 60 sec Timer

function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {

            document.getElementById("counter").innerHTML = "";
        }
    }
    tick();
}

// starter timer 
countdown();



// score, går opp for hvert riktig svar
var score = 0;

// spørsmålene 
var questions = [
    {
        prompt: "Hva ar en par",
        answer: "aper"
    },
    {
        prompt: "Fullfør setningen: java",
        answer: "script"
    },
    {
        prompt: "Hvem er gay?",
        answer: "eddi"
    }
];





let myQuestion;


// funkksjon som velger et spørsmål 
function pickQuestion() {



    // variabel som gjør at spørsmålene som blir valgt er tilvelig hver gang
    myQuestion = questions[Math.floor(Math.random() * questions.length)]


    return (myQuestion);


}




// henter overskriften på siden og lagrer det i en variabel
var questionHeader = document.getElementById("questionHeader");

// bytter skriften i overskriften til spørsmålet valgt i pickquesition
questionHeader.innerHTML = pickQuestion().prompt


// funksjon som gjør at hvis det man skriver inn på siden er det samme som svaret til spørsmålet får man pluss ett poeng
function myFunction() {
    var response = document.getElementById("response").value
    var answer = pickQuestion().answer

    if (response === answer) {
        score++;
        alert('correct');
    } else {
        alert('wrong');
    }

}






/* for (var i=0; i < questions.length; i++ ) {
   var response = window.prompt(questions[i].prompt);
   if(response == questions[i].answer) {
     score++;
     
   } else {
    
   } 
 }
 
 alert("you got " + score + "/" + questions.length + " questions right");
 
 */