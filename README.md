# Web-API-Code-Quiz

Web application that allows users to take a code quiz on web APIs

## Pseudo-code Notes

- Top bar with timer and links to view high scores

### Page 1

- Coding Quiz Challenge heading
- description/instructions for quiz
- start button

### Page 2

- start button starts quiz
- heading with the question
  - 4 answers buttons numbered
- once answer is selected
  1. move to next question
  2. display correct/wrong under questions
  3. incorrect questions subtract time from clock

### Page 3

- once all questions are answered or when timer reaches 0, game is over
- completion shown as heading
- score is shown
- input box shown with button to submit to highscore screen

### highscore screen

- shows list of initials of players and their scores
- has a go back button and a clear scores button

incorrect answers subtract timer by -15s

correct/incorrect prompts only stay on screen for about 1 second

- hide score screen during quiz and show once quiz is completed rather than dynamically adding the html to the page in js

### Development notes

- refactored the code to utilize html containers to display the application content

  - originally tried to dynamically generate all elements

  used the array sort function to sort the scores
  watched (JavaScript Problem: Sorting an Array of Objects - All Things JavaScript, LLC)https://www.youtube.com/watch?v=0d76_2sksWY to help understand how the function works
