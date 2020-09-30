console.log("this is a test");

// targets the ul to populate the scores list under
var highScores = document.getElementById("scores");

var goBackBtn = document.getElementById("go-back");

var clearBtn = document.getElementById("clear-scores");

//console.log(storedScoreArray);

// when the page loads, the renderScore function  is executed
window.onload = renderScores();

// displays the scores from local storage on the page
function renderScores() {
  // gets the score stored in local storage
  var storedScoreArray = JSON.parse(localStorage.getItem("userScores"));
  // if there are score in local storage, sorts the array of objects by score - largest to smallest
  if (storedScoreArray !== null) {
    storedScoreArray.sort(function (a, b) {
      return b.score - a.score;
    });

    // for each scores object in the array, an li is created and added to the page with the user's initials and score
    for (var i = 0; i < storedScoreArray.length; i++) {
      var scoreList = document.createElement("li");
      scoreList.setAttribute(
        "class",
        "list-group-item list-group-item-primary px-2 py-1 font-weight-bold"
      );
      scoreList.textContent =
        i +
        1 +
        "." +
        " " +
        storedScoreArray[i].name +
        " - " +
        storedScoreArray[i].score;
      highScores.appendChild(scoreList);
    }
  }
}

// button returns the user to the quiz instructions page to try the quiz again
goBackBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});

// clears the scores from local storage
clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  highScores.innerHTML = "";
  renderScores();
});
