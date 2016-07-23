// Example HTML
// <div id="wrapper">
//   <h1>Totally Trivial Trivia!</h1>
//   <div id="subwrapper">
//     <div id="quiz-area">
//       <button id="start">Start</button>
//     </div>
//   </div>
// </div>


var panel = $('#quiz-area'); // Panel we will write and append all of the HTML to from this JS file
var countStartNumber = 30; // Global variable,

// This function handles events where one button is clicked
// Start On Click
$(document).on('click', '#start', function(e) {
    game.startGame();
});

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    game.checkGuess(e)
})

// Start Over On Click
$(document).on('click', '#start-over', function(e) {
    game.loadQuestion();
});


var questionsArray = [{
    question: "This is the first question",
    choices: ["one", "two", "three", "four"],
    choiceimages: ["one", "two", "three", "four"],
    correctChoice: "two",
    image: ""
}, {
    question: "This is the second question",
    choices: ["one", "two", "three", "four"],
    correctChoice: "one",
    image:
}, {
    question: "This is the third question",
    choices: ["", "", "", ""],
    correctChoice: "",
    image: ""
}]

// Array of Question Objects [0,1,2,3]

var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,

    // Functions
    countdown: function() {

        // Set Countdown time for each question

    },

    timeUp: function() {

        // What happens when the timer runs out

    },

    reset: function() {


    },

    checkGuess: function() {

        // Is this the correct answer for the Question

        // Yes

        // No

        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {

            // Game Over!!

        } else {

            // Continue Game
        }


    },

    finalResults: function() {


    },

    loadQuestion: function() {

        // start timer
        timer = setInterval(game.countdown, 1000);

        // Print Question
        console.log(this.questions[questionNumber].question)

        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)

    },

    nextQuestion: function() {

        // start timer
        this.timer()

        // Advance Question Number
        this.questionNumber++

        // Call loadQuestion() Function

    }

}