console.log("hello world");

var mainPage = document.getElementById("main-quiz-start");
var startButton = document.getElementById("start-quiz");

var headingQuestion = document.getElementById("heading");
var answerChoices = document.getElementById("answers");
// sets the index of the questionBank array to the first object
var questionIndex = 0;

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

function startQuiz() {
  // sets the display of the instruction page to none, hiding it from the user
  mainPage.style.display = "none";

  // renders the question
  renderQuestions(questionIndex);
}

// function displays the questions and answers for the quiz
function renderQuestions(index) {
  console.log(index);

  if (index === questionBank.length) {
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
  var answerIndex = event.target.getAttribute("data-index");
  event.preventDefault();
  if (
    event.target.matches("button") &&
    questionBank[questionIndex].choices[answerIndex] ===
      questionBank[questionIndex].answer
  ) {
    questionIndex++;
    renderQuestions(questionIndex);
  } else {
    questionIndex++;
    renderQuestions(questionIndex);
  }
}

// displays the score screen content after the game ends (either the user's time is up or they answer all questions)
function renderScoreScreen() {
  var quizContainer = document.getElementById("quiz-container");

  // clears the quiz questions and answers content from the page
  quizContainer.innerHTML = "";
  console.log("Game over!");
}
// when the start button is clicked, the quiz begins
startButton.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", checkAnswer);
