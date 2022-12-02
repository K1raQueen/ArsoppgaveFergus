
var score = 0;


var questions = [
    {
        prompt: "Who is this",
        answer: "dd"
    },
    {
        prompt: "Is hhkhhihs",
        answer: "yes"
    }
];

let myQuestions = questions[Math.floor(Math.random() * questions.length)]

function pickQuestion() {


    return (myQuestions);


    
}


var questionHeader = document.getElementById("questionHeader")

questionHeader.innerHTML = pickQuestion().prompt






function myFunction() {
    var response = document.getElementById("response").value
    var answer = pickQuestion().answer
    console.log("response object: " + response)
    console.log("correct answer: " + answer)
    if (response === answer) {
        score++
        alert('correct')
    } else {
        alert('wrong')
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