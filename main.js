let startQuiz = document.querySelector('#startQuizPb')
let pbQuestionContainer = document.querySelector('#pbQuestionContainer')
let pbAnswer = document.querySelector('#answer')
let pbQuestion = document.querySelector("#pbQuizContainer #question");

let pb = [
  {
    question: "Who is the main character of this series?",
    answer: "Scofield"
  }
]

startQuiz.addEventListener('click', function(){
          pbQuestion.innerHTML = "" + pb[0].question;
    });
