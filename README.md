# Web-API-Code-Quiz

## Descirption

This application helps users to familiarize themselves with JavaScript code. Coding assessments are one of the most important parts of an interview process and typically contain a combination of multiple-choice questions.

This application provides users with a time quiz to practice coding principles and logs the user's initials and score based on the time left after the quiz finishes. These scores are saved to local storage and will persist even when the page is reloaded.

## Table Of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Application Screenshot](#application-screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Installation

In order to view this application, please visit the main page https://ntch2000.github.io/web-api-code-quiz/index.html.

To see the code base for this page, visit my github page https://github.com/ntch2000/web-api-code-quiz. The code can be viewed directly in the github repository or downloaded and viewed in Visual Studio Code.

## Application Screenshots

![Quiz Start Page](./screenshots/Quiz-Main-Page.jpg "Quiz Start Page")
_Sample application screenshot of the main quiz start page._

![Correct Answer](./screenshots/correct-answer.jpg "Correct Answer")
_Sample application screenshot of a question with a correct answer feedback._

![Wrong Answer](./screenshots/wrong-answer.jpg "Wrong Answer")
_Sample application screenshot of a question with a wrong answer feedback._

![Submit Initials and Score](./screenshots/initials-scores.jpg "Submit Initials and Score")
_Sample application screenshot of the initials and score screen._

![High Scores Page](./images/password-length-prompt.jpg "High Scores Page")
_Sample application screenshot of the high scores page._

## Usage

Users can start the quiz by clicking the 'Start Quiz' button and are asked to answer the questions that appear within the time limit. Feedback will be shown at the bottom of the answer to let users know whether they answered the questions correctly. An incorrect answer will result in the user losing 10 seconds of time from the timer in the top right of the screen.

Once a question is answered, the next question will be displayed and the quiz will continue. After the last question is answered, the user will be shown the score screen where they will be able to enter their initials, view their score, and submit their score to the high scores page. These scores will remain in local storage until cleared. The user will then be able to go back and take the quiz again to try to beat their previous score.

The scores on the high scores page are sorted by highest to lowest.

## Credits

- To properly sort the scores object, I used a video from [JavaScript Problem: Sorting an Array of Objects - All Things JavaScript, LLC](https://www.youtube.com/watch?v=0d76_2sksWY). This tutorial/example helped me understand how to use the sort() function.
- Various class activities were used in helping to target DOM elements and using the timer.
- [Bootstrap 4](https://getbootstrap.com/) was used to style the pages.

---

© 2020 Neil Gandhi
