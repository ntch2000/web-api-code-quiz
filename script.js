console.log("hello world");

// var questionHeading = document.getElementById("heading");
// var answerChoices = document.createElement
// questionHeading.textContent = "Coding Quiz Challenge";

var timerDisplay = document.getElementById("timer");
var startQuizButton = document.getElementById("start-quiz");
var timerSeconds = 0;

timerDisplay.textContent = "Time: " + timerSeconds;

// startQuiz function that begins the quiz
function startQuiz() {
  //calls the function to start the timer
  quizTimer();
}

// function that starts the timer for the quiz
function quizTimer() {
  timerSeconds = 30;
  var interval = setInterval(function () {
    timerSeconds--;
    timerDisplay.textContent = "Time: " + timerSeconds;

    if (timerSeconds === 0) {
      clearInterval(interval);
      alert("Time is up!");
    }
  }, 1000);
}
startQuizButton.addEventListener("click", startQuiz);
