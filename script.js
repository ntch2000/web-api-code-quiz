console.log("hello world");

var questionHeading = document.getElementById("heading");
//var answerChoices = document.createElement;
// questionHeading.textContent = "Coding Quiz Challenge";

var timerDisplay = document.getElementById("timer");
var startQuizButton = document.getElementById("start-quiz");
var answerContainer = document.getElementById("answers");
//var instructionsEl = document.getElementById("instructions");
var quizContainer = document.getElementById("quiz-container");
var instructions = document.createElement("p");
var answerChoices = document.createElement("button");

var timerSeconds = 0;

// sets the index of the first object in the questionBank array to be displayed in the quiz.
var questionIndex = 0;

timerDisplay.textContent = "Time: " + timerSeconds;

// initialization of the questions and answers for the quiz

var questionBank = [
  {
    question: "This is a test question 1",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 2",
  },
  {
    question: "This is a test question 2",
    choices: ["answer a", "answer b", "answer 3", "answer 2"],
    answer: "answer a",
  },
  {
    question: "This is a test question 3",
    choices: ["answer 1", "answer c", "answer e", "answer 4"],
    answer: "answer 4",
  },
  {
    question: "This is a test question 4",
    choices: ["answer 2", "answer a", "answer 7", "answer g"],
    answer: "answer g",
  },
];

function loadQuizInstructions() {
  // loads the instructions for the code quiz
  instructions.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your  score/time by ten seconds!";
  quizContainer.appendChild(instructions);
}
// startQuiz function that begins the quiz
function startQuiz() {
  //calls the function to start the timer
  quizTimer();

  startQuizButton.parentNode.removeChild(startQuizButton);
  instructions.parentNode.removeChild(instructions);

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
    answerChoices.setAttribute("index", i);
    answerChoices.textContent = questionBank[index].choices[i];

    // adds the answer button choices to the page
    quizContainer.appendChild(answerChoices);
  }
}

function checkAnswers(event) {
  event.preventDefault();
  // targets the index attribute of the button pressed
  var answerIndex = event.target.getAttribute("index");

  // checks to see if the button pressed is the correct answer
  if (
    event.target.matches("button") &&
    questionBank[questionIndex].choices[answerIndex] ===
      questionBank[questionIndex].answer
  ) {
    console.log(answerIndex);
    alert("Correct!");
  } else {
    console.log(answerIndex);
  }
}

// calls the function to load the instructions when the page loads
window.onload = loadQuizInstructions();
startQuizButton.addEventListener("click", startQuiz);
quizContainer.addEventListener("click", checkAnswers);
