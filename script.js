




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
        prompt: "Hvem er sus?",
        answer: "red"
    }
];






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


alert("you got " + score + "/" + questions.length + " questions right");





/* for (var i=0; i < questions.length; i++ ) {
   var response = window.prompt(questions[i].prompt);
   if(response == questions[i].answer) {
     score++;
     
   } else {
    
   } 
 }
 
 alert("you got " + score + "/" + questions.length + " questions right");
 
 */