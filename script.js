



// Scoren til spilleren, vil gå opp for hvert riktig svar
var score = 0;


// Spørsmålene 
var questions = [
    {
        prompt: "What country is this?",
        answer: "brazil"
    },
    {
        prompt: "What country is this?",
        answer: "cuba"
    },
    {
        prompt: "What country is this?",
        answer: "egypt"
    },
    {
        prompt: "What country is this?",
        answer: "greece"
    },
    {
        prompt: "What country is this?",
        answer: "japan"
    },
    {
        prompt: "What country is this?",
        answer: "mexico"
    },
    {
        prompt: "What country is this?",
        answer: "norway"
    },
    {
        prompt: "What country is this?",
        answer: "russia"
    },
    {
        prompt: "What country is this?",
        answer: "spain"
    },
    {
        prompt: "What country is this?",
        answer: "vietnam"
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

    var pictures = ["", "images/cuba.png", "images/egypt.png", "images/greece.png", "images/japan.png", "images/mexico.png", "images/norway.png", "images/russia.png", "images/spain.png", "images/vietnam.png"];

    document.getElementById("picture").src = pictures[i];

// Nullstiller teksten i formen
    document.getElementById('form').reset();

}


// Funksjon for svaret etter man er ferdig med quizen

function afterSubmit() {

    

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("number_correct").innerHTML = "You got " + score + "/" + questions.length + " correct.";

    

}









