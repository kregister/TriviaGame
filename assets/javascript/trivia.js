// Start On Click
// Submit On CLick
// Next
// New Game On Click

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

// End Game On Click
$(document).on('click', '#end', function(e) {
  game.end();
});

questionNumber = 0

var questionsArray = [{
  question: "How Many Kilometers is 100 MPH?",
  answers: ["120.7008 km/h", "64.37376 km/h", "160.9344 km/h", "80.4672 km/h"],
  
  correctAnswer: "160.9344 km/h"
}, {

  question: "When was the motorcycle's layout established??",
  answers: ["1904", "1914", "1924", "1934"],
  
  correctAnswer: "1914"
  // Add definition after the answer is shown - "The layout of the modern motorcycle has remained relatively unchanged since it was established in 1914."
}, {

  question: "In 1917, who bought roughly one-third of all the Harley-Davidson motorcycles produced?",
  answers: ["Hell's Angels", "The U.S. military", "The Salvation Army", "The Soviet Union"],
  
  correctAnswer: "The U.S. military"
}, {

  question: "The rotational force of the crankshaft is transmitted to?",
  answers: ["The engine", "The rear wheel", "The front wheel", "The frame"],
  
  correctAnswer: "The rear wheel"
}, {

  question: "What do riders use to activate a motorcycle's brakes?",
  answers: ["hand levers", "foot pedals", "gear shifter", "both hand levers and foot pedals"],
  
  correctAnswer: "both hand levers and foot pedals"
}, {

  question: "Which of the following types of motorcycles aren't street-legal?",
  answers: ["off-road bikes", "Cruisers", "Sport Bikes", "Naked Bikes"],
  
  correctAnswer: "off-road bikes"
}, {

  question: "What is the World's Best-Selling Motorcycle Brand?",
  answers: ["Suzuki", "Harley-Davidson", "Yamaha", "Honda"],
  
  correctAnswer: "Honda"
}, {

}]



var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
	questionTimer: 30,
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,


    
    startGame: function() {
    	$('#start').remove();
    	$('#question_box').append("<h1>Start Trivia</h1>");

    	for (var i = 0; i < questionsArray.length; i++) {
    		$('#question_box').append('<h2>' + questionsArray[i].question + '</h2>');
    	
    			
    	for (var x = 0; x < questionsArray[i].answers.length; x++) {
    		$('#question_box').append('<input type="radio" name="answers '+i+' ">' + questionsArray[i].answers[x] );

        // panel.append('<button id="done">Submit</button>');


    }

}

};



    	//start timer



    	// $("<h1>Start Trivia</h1>").remove();	
    
  //   	countdown: function(){
		// console.log(game.questionTimer);
		// game.questionTimer --;	

		// game.loadQuestion

	    		
    	

		// // questionsArray[i]

  //   },

    

//     countdown: function() {

//         // Set Countdown time for each question

//     },

//     timeUp: function() {

//       //  What happens when the timer runs out

//     },

//     reset: function() {


//     },

//     checkGuess: function() {

//         // Is this the correct answer for the Question

//         // Yes

//         // No

//         // Is this the last Question?
//         if (this.questionNumber === questionsArray.length - 1) {

//             // Game Over!!

//         } else {

//             // Continue Game
//         }


//     },

//     finalResults: function() {


//     },

//     loadQuestion: function() {

//         // start timer
//         timer = setInterval(game.countdown, 1000);

//         // Print Question
//         console.log(this.questions[questionNumber].question)

//         // Print Choices as buttons (for loop needed)
//         console.log(this.questions[questionNumber].choices[0])
//         console.log(this.questions[questionNumber].choices[1])
//         console.log(this.questions[questionNumber].choices[2])
//         console.log(this.questions[questionNumber].choices[3])
//         console.log(this.questions[questionNumber].correctChoice)

//     },

//     nextQuestion: function() {

//         // start timer
//         this.timer()

//         // Advance Question Number
//         this.questionNumber++
// //
//   //      Call loadQuestion() Function

//     }

// }

// var panel = $('#quiz-area');


// $(document).on('click', '#start', function(e) {
//   game.start();
// });

// $(document).on('click', '#done', function(e) {
//   game.done();
// });


//Question set
  //var questions = all questoins and choices
  

// var game = {
//   correct:0,
//   incorrect:0,
//   counter:120,
//   countdown: function(){
//     game.counter--;
//     $('#counter-number').html(game.counter);

//     if (game.counter === 0){
//       console.log('TIME UP');
//       game.done();
//     }
//   },
//   start: function() {
//     timer = setInterval(game.countdown, 1000);

//     $('#subwrapper').append('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
//     $('#start').remove();


//    //for each question you will loop and add buttons and display each choice with jquery
//   for(var i=0; i < 10; i++) {
//     //code here
//     for(var j=0; j<4; j++) {
//       //code her
//     }
//   }
    
//   },
//   done: function() {

//     //for each questions if they answered correct
//     //marked as checked if false well increment incorrect 

 
//   },
//     result: function() {

//     clearInterval(timer);


//     //the results of correct or incorrect go here
//   }

// };