// --------------- DOM Variables ----------------------

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

// container that will have the answer feedback information on the score screen  -- displays after the last question of the quiz
var quizFeedbackContainer = document.getElementById("answer-feedback-quiz");

var scoreFeedbackContainer = document.getElementById("answer-feedback-score");

// gets the div element for the score screen
var scorePage = document.getElementById("score-page");

var submitScoreBtn = document.getElementById("submit-scores");

var inputInitials = document.getElementById("initials");

// --------------- JS Variables ----------------------
var timeLeft = 75;
var interval;
var questionIndex = 0;

// variable that will have user feedback on whether the answer was correct or wrong
var answerFeedback;

// variable to hold the user's score during the quiz
var finalScore;

// array of objects with all of the questions, answer choices, and the correct answer for each question
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

// holds the scores
var scoreArray = [];

// --------------- Function Definitions ----------------------

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
  if (index === questionBank.length) {
    // stops the timer and executes the score screen function
    clearInterval(interval);
    renderScoreScreen();
  } else {
    // clears the answer buttons from the page - important for when the next question is rendered.
    answerChoices.innerHTML = "";

    // displays the question in the heading element
    headingQuestion.textContent = questionBank[index].question;

    // loops through all of the answer options in the choices array
    for (var i = 0; i < questionBank[index].choices.length; i++) {
      // creates the answer button element
      var answerButtons = document.createElement("button");

      // sets the text of the button to the first answer choice in the array
      answerButtons.textContent = questionBank[index].choices[i];

      //styles the button and sets the data-index for checking for the correct answer
      answerButtons.setAttribute("class", "btn btn-primary rounded");
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
    // sets the answerFeedback variable to correct if the answer choice is correct
    answerFeedback = "Correct!";
  } else {
    // sets the answerFeedback variable to wrong if the answer choice is incorrect and subtracts 10 seconds from the timer
    answerFeedback = "Wrong!";
    timeLeft -= 10;
  }
  if (questionIndex === questionBank.length - 1) {
    displayFeedback(scoreFeedbackContainer);
  }
  // displays the feedback message to the user on whether the choice was correct or wrong
  displayFeedback(quizFeedbackContainer);
  // increments to the next question and displays it to the page
  questionIndex++;
  renderQuestions(questionIndex);
}

// adds and removes the feedback information to the passed in container
function displayFeedback(container) {
  var time = 1;

  // sets the class for the feedback div
  container.setAttribute("class", "feedback mt-3 pt-2 col-8");
  // sets the text based on the correct or wrong answer
  container.textContent = answerFeedback;
  var interval = setInterval(function () {
    time--;
    if (time === 0) {
      // after 1/2 second, the class and text are cleared
      container.innerHTML = "";
      container.setAttribute("class", "");
      clearInterval(interval);
    }
  }, 500);
}

// displays the score screen content after the game ends (either the user's time is up or they answer all questions).
function renderScoreScreen() {
  // clears the quiz questions and answers content from the page
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  // shows the score-page content
  scorePage.style.display = "block";

  // gets the id of the paragraph element and outputs the user's score
  var scoreMessage = document.getElementById("score");
  scoreMessage.textContent = "Your final score is: " + finalScore;
}

// saves the user scores to an object in localStorage
function saveScores() {
  // get the user's initials from the input box
  var initials = document.getElementById("initials").value;
  initials = initials.toUpperCase();

  // obtain the current scores object from local storage
  var storedScoreArray = JSON.parse(localStorage.getItem("userScores"));

  // if there are scores, sets the score array to the saved object array from local storage
  if (storedScoreArray !== null) {
    scoreArray = storedScoreArray;
  }

  // adds the new initials and scores to the array and saves those to local storage
  scoreArray.push({ name: initials, score: finalScore });
  localStorage.setItem("userScores", JSON.stringify(scoreArray));
  console.log(scoreArray);
}

// --------------- Event Listeners ----------------------

// when the start button is clicked, the quiz begins and the timer starts
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);

// listens to the answer button pressed to check the answer
answerChoices.addEventListener("click", checkAnswer);

// event to display whether the answer was correct or not

// event to move to the highscores page once initials are entered after the quiz ends
submitScoreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //var regex = /^[A-za-z]/;
  if (inputInitials.value === "") {
    console.log(inputInitials);
    //inputInitials.value = " ";
    alert("You must enter your initials!");
  } else {
    saveScores();
    console.log("this is a test");
    window.location.href = "highscores.html";
  }
});
