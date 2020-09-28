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
var quizScore = 0;

var interval;

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
// function startQuiz() {
//   //calls the function to start the timer
//   quizTimer();
// }

// function that starts the quiz
function startQuiz() {
  // sets the timer for the quiz
  timerSeconds = 76;
  // removed the start quiz button
  startQuizButton.parentNode.removeChild(startQuizButton);

  //removed the instructions
  instructions.parentNode.removeChild(instructions);
  questionHeading.textContent = "";

  var interval = setInterval(function () {
    timerSeconds--;
    timerDisplay.textContent = "Time: " + timerSeconds;

    // executes the function to display the questions
    renderQuestion(questionIndex);

    // stops the time display when time is up or when the last question is answered
    if (timerSeconds === 0 || questionIndex === questionBank.length) {
      clearInterval(interval);
    }
  }, 1000);
}

function renderQuestion(index) {
  // conditional to check if the game end conditions are met, if so, the game end function is executed
  if (timerSeconds === 0 || index === questionBank.length) {
    quizScore = timerSeconds;
    gameEnd();
  } else {
    // renders the questions
    questionHeading.textContent = questionBank[index].question;

    // clears the quizContainer content before generating the answer choice buttons
    quizContainer.innerHTML = "";

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
    // increments to the next question and calls the renderQuestion function again with the new question index
    questionIndex++;
    renderQuestion(questionIndex);
  } else {
    // subtract 10 seconds for incorrect answer, increments to the next question and calls renderQuestion function again with the new question index
    timerSeconds -= 10;
    questionIndex++;
    renderQuestion(questionIndex);
  }
}

// function displays the screen to enter the user's initials and score to the high score board

//!! ERROR WHEN CLICKING INPUTBOX DUE TO EVENTLISTENER ON QUIZCONTAINER. MAY HAVE TO CREATE A NEW VARIABLE OR SOMEHOW CANCEL EVENTLISTENER
function gameEnd() {
  clearInterval(interval);
  var scoreForm = document.createElement("form");
  var initialsInput = document.createElement("input");
  var submitBtn = document.createElement("button");
  var inputLabel = document.createElement("label");

  // displays the all done message
  questionHeading.textContent = "All done!";

  // empties the html code for the answer buttons
  quizContainer.innerHTML = "";

  // displays the user's score
  instructions.textContent = "Your final score is " + quizScore + "!";

  quizContainer.appendChild(instructions);
  inputLabel.textContent = "Enter Initials: ";
  scoreForm.appendChild(inputLabel);
  initialsInput.setAttribute("id", "submit-score");
  scoreForm.appendChild(initialsInput);
  submitBtn.textContent = "Submit";
  submitBtn.setAttribute("class", "btn btn-primary");
  scoreForm.appendChild(submitBtn);

  quizContainer.appendChild(scoreForm);

  // create element to display score

  // create an input form to input initials with a submit button
  //alert("the game is ended");
}
// calls the function to load the instructions when the page loads
window.onload = loadQuizInstructions();
startQuizButton.addEventListener("click", startQuiz);
quizContainer.addEventListener("click", checkAnswers);
