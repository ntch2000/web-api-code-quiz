console.log("hello world");

var timerDisplay = document.getElementById("timer");
// gets the main page container
var mainPage = document.getElementById("main-quiz-start");

// gets the start button on the main page
var startButton = document.getElementById("start-quiz");

// gets the heading element for the quiz questions
var headingQuestion = document.getElementById("heading");

// gets the answers div to generate the buttons under
var answerChoices = document.getElementById("answers");
// sets the index of the questionBank array to the first object

var timeLeft = 75;
var interval;
var questionIndex = 0;

var finalScore;

var questionBank = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    answer: "3. parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    answer: "3. quotes",
  },
  {
    question:
      "A very useful  tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
];

// window.onload = function () {
//   timerDisplay.textContent = "Time: 0";
// };

function startQuiz() {
  // sets the display of the instruction page to none, hiding it from the user
  mainPage.style.display = "none";

  // renders the question
  renderQuestions(questionIndex);
}

function startTimer() {
  // displays the timer
  timerDisplay.textContent = "Time: " + timeLeft;
  interval = setInterval(function () {
    timeLeft--;
    // displays the updated time
    timerDisplay.textContent = "Time: " + timeLeft;

    // sets the user's score to the time remaining
    finalScore = timeLeft;
    if (timeLeft === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// function displays the questions and answers for the quiz
function renderQuestions(index) {
  //console.log(timerDisplay.textContent);
  //console.log(finalScore);

  if (index === questionBank.length) {
    // stops the timer and executes the score screen function
    clearInterval(interval);
    renderScoreScreen();
  } else {
    // clears the answer buttons from the page - important for when the next question is rendered.
    answerChoices.innerHTML = "";

    // displays the question in the heading element
    headingQuestion.textContent = questionBank[index].question;

    //console.log(headingQuestion.textContent);

    // loops through all of the answer options in the choices array
    for (var i = 0; i < questionBank[index].choices.length; i++) {
      // creates the answer button element
      var answerButtons = document.createElement("button");

      // sets the text of the button to the first answer choice in the array
      answerButtons.textContent = questionBank[index].choices[i];

      //styles the button and sets the data-index for checking for the correct answer
      answerButtons.setAttribute("class", "btn btn-primary");
      answerButtons.setAttribute("data-index", i);

      // adds the element button to the page
      answerChoices.appendChild(answerButtons);
    }
  }
}

function checkAnswer(event) {
  // checks to see if the answer button clicked is equal to the correct answer for the question
  var answerIndex = event.target.getAttribute("data-index");
  event.preventDefault();
  if (
    event.target.matches("button") &&
    questionBank[questionIndex].choices[answerIndex] ===
      questionBank[questionIndex].answer
  ) {
    // if the answer is correct, the question index is incremented and the next question is displayed
    questionIndex++;
    renderQuestions(questionIndex);
  } else {
    // if the answer is incorrect, 10 seconds are subtracted from the time, the question index is incremented and the next question is displayed
    timeLeft -= 10;
    questionIndex++;
    renderQuestions(questionIndex);
  }
}

// displays the score screen content after the game ends (either the user's time is up or they answer all questions).
function renderScoreScreen() {
  //var finalScore = timeLeft;
  //console.log(timeLeft);

  // clears the quiz questions and answers content from the page
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  // gets the id of the heading element and adds the quiz completion text
  var completionMessage = document.getElementById("completion-message");
  completionMessage.textContent = "All done!";

  // gets the id of the paragraph element and outputs the user's score
  var scoreMessage = document.getElementById("score");
  scoreMessage.textContent = "Your final score is: " + finalScore;

  console.log("Game over!");
}
// when the start button is clicked, the quiz begins
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);
answerChoices.addEventListener("click", checkAnswer);
