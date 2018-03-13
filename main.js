let startQuizPb = document.querySelector('#startQuizPb')
let pbQuestionContainer = document.querySelector('#pbQuestionContainer')
let pbAnswer = document.querySelector('#answer')
let pbQuestion = document.querySelector("#pbQuizContainer #question");

const pbQuestions = [
  {
  question: "Who is the main character in this movie?",
  answers: {
    a: "Michael Scofield",
    b: "Bill Clinton"
  },
  correctAnswer: "b"
},
{
  question: "The group needed to reduce by 1, who did they think would be the best person to go to?",
  answers: {
    a: "Abruzzi"
    b: "T-Bag"
  },
  correctAnswer: "a"
}];

function buildPbQuiz(){
  const output = []; // a place to store the HTML output

  pbQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = []; // a place to store our answers


    // for each available answer add radio button
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    // add this question and its answers to the output

    output.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
       </div>`
    );
  });

  // combine our output list into one string of html and put it on the page

  pbQuestionContainer.innerHTML = output.join("");
}
function showResults(){
  //gather answer container from our quiz
  const answerContainers = pbQuestionContainer.querySelectorAll(".answers");

  //keep track of users answers
  let numCorrect = 0;

  //for each question
  myQuestions.forEach((currentQuestion, questionNumber) => {
    //find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector)  || {}).value;
    //if this answer is correct
    if(userAnswer === currentQuestion.correctAnswer) {
      //add to the number of correct answers
      numCorrect++;

      // color the answers green

      answerContainers[questionNumber].style.color =
      "lightgreen";
    }
    else {
      // if the answer is wrong or blank color it red
      answerContainers[questionNumber].style.color = "red";
    }

  )}
}
startQuiz.addEventListener('click', function(){
          pbQuestion.innerHTML = "" + pb[0].question;
          console.log('working')
    });
