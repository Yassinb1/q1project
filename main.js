(function() {
  let myQuestions = [{
      question: "What national team does Lionel Messi play for?",
      answers: {
        a: "Brazil",
        b: "Argentina",
        c: "Russia",
        d: "France",
      },
      correctAnswer: "b"
    },
    {
      question: "What jersey number does Messi wear at Barcelona?",
      answers: {
        a: "10",
        b: "7",
        c: "13",
        d: "99"
      },
      correctAnswer: "a"
    },
    {
      question: "How old is Lionel Messi?",
      answers: {
        a: "30 years old",
        b: "25 years old",
        c: "35 years old",
        d: "23 years old"
      },
      correctAnswer: "a"
    },
    {
      question: "Who was Lionel Messi's idol as a child?",
      answers: {
        a: "Pele",
        b: "Maradona",
        c: "Beggio",
        d: "Basten"
      },
      correctAnswer: "b"
    },

  ];

  let quizContainer = document.querySelector(".quiz-container")

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
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

    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }




  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "green";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} answers correct.`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  function unHideQuiz(){
      quizBox.style.display = "block"
  }



  const quiz = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();
  // display quiz right away



  const quizBox = document.querySelector(".quizBox")
  const messi = document.querySelector(".messi")
  const harden = document.querySelector(".harden")
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;



  showSlide(0);


  // on submit, show results

  messi.addEventListener("click", unHideQuiz)
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
