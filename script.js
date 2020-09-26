console.log("hello world");

var questionHeading = document.getElementById("heading");
//var answerChoices = document.createElement;
// questionHeading.textContent = "Coding Quiz Challenge";

var timerDisplay = document.getElementById("timer");
var startQuizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answers");
var instructionsEl = document.getElementById("instructions");

var timerSeconds = 0;
var questionIndex = 0;

timerDisplay.textContent = "Time: " + timerSeconds;

// initialization of the questions and answers for the quiz

var questionBank = [
  {
    question: "This is a test question 1",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 2",
  },
];

// startQuiz function that begins the quiz
function startQuiz() {
  //calls the function to start the timer
  quizTimer();

  startQuizButton.parentNode.removeChild(startQuizButton);
  instructionsEl.parentNode.removeChild(instructionsEl);

  renderQuestion(questionIndex);
}

// function that starts the timer for the quiz
function quizTimer() {
  timerSeconds = 30;
  var interval = setInterval(function () {
    timerSeconds--;
    timerDisplay.textContent = "Time: " + timerSeconds;

    if (timerSeconds === 0) {
      clearInterval(interval);
      console.log("Time is up!");
    }
  }, 1000);
}

function renderQuestion(index) {
  // renders the questions
  questionHeading.textContent = questionBank[index].question;

  // loops through the choices array property to create the answer options
  for (var i = 0; i < questionBank[index].choices.length; i++) {
    var answerChoices = document.createElement("button");

    // sets the attributes for the created buttons and adds the answer text
    answerChoices.setAttribute("class", "btn btn-primary btn-block");
    answerChoices.textContent = questionBank[index].choices[i];

    // adds the answer button choices to the page
    answerContainer.appendChild(answerChoices);
  }
}

function createAnswers() {}
startQuizButton.addEventListener("click", startQuiz);
