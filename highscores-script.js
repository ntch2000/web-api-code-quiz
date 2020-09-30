console.log("this is a test");

// gets the score stored in local storage
var storedScoreArray = JSON.parse(localStorage.getItem("userScores"));

// targets the ul to populate the scores list under
var highScores = document.getElementById("scores");

//console.log(storedScoreArray);

// when the page loads, the renderScore function  is executed
window.onload = function renderScores() {
  // for each scores object in the array, an li is created and added to the page with the user's initials and score
  for (var i = 0; i < storedScoreArray.length; i++) {
    var scoreList = document.createElement("li");
    scoreList.setAttribute("class", "list-group-item list-group-item-primary");
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
};
