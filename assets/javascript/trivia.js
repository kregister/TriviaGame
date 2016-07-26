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

// Beginning of questions, answer possibilities & correct answers within an Array.
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
}]

//Beginning of Functions

var game = {

    // Game Variables

    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correct: 0,
   	wrong: 0,
    counter:120,

  	// Timer Countdown.....IF statement not activating once time is up.

  	countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME IS UP!');
      game.done();
    }
  },

  	// Game Start Function runs & timer is activated.
    startGame: function() {
    	timer = setInterval(game.countdown, 1000);

    	$('#sub-wrap').prepend('<h2>Remaining Time: <span id="counter-number">120</span> Seconds</h2>');
    	$('#start').remove();
    	$('#question_box').append("<h1>Good Luck!</h1>");
    	for (var i = 0; i < questionsArray.length; i++) {
    		$('#question_box').append('<h2>' + questionsArray[i].question + '</h2>');
    		for (var t = 0; t < 4; t++) {
    			$('#question_box').append('<input type="radio" name="answers'+i+'">' + questionsArray[i].answers[t] );
    		}
		}

	},

	done: function() {

// Answer check formula...repeated for each question to check for right & wrong answers.

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questionsArray[0].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questionsArray[1].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questionsArray[2].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questionsArray[3].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questionsArray[4].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questionsArray[5].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questionsArray[6].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questionsArray[7].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    });

// ISSUE - Cannot get the DONE button to work and appear at the bottom of the page to activate the results function.
    panel.append('<button id="done">Done</button>');

    this.result();
  },

  // RESULTS function to display right and wrong answers.

    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Wrong Answers: ' + this.wrong + '</h3>');
  }

};