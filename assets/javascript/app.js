

var triviaQuestions = [{
        question: "A person with an April 13th birthday would have what sign?",
        answerChoices: ["Scorpio", "Pisces", "Aries", "Taurus"],
        correct: 2,
        message: "placeholder text for now",
        image: "question1"
    },

    {
        question: "Which of the following keywords would a Gemini most likely use to describe themselves?",
        answerChoices: ["I feel", "I am", "I desire", "I think"],
        correct: 3,
        message: "placeholder text for now",
        image: "question2"
    },
    {
        question: "Which of the four elements is Capricorn?",
        answerChoices: ["Air", "Earth", "Water", "Fire"],
        correct: 1,
        message: "placeholder text for now",
        image: "question3"
    },
    {
        question: "Which planet is symbolic of our emotional nature?",
        answerChoices: ["Sun", "Mars", "Moon", "Mercury"],
        correct: 2,
        message: "placeholder text for now",
        image: "question4"
    },
    {
        question: "The Moon rules which sign of the zodiac?",
        answerChoices: ["Pisces", "Cancer", "Gemini", "Sagittarius"],
        correct: 1,
        message: "placeholder text for now",
        image: "question5"
    },
    {
        question: "How many houses is the zodiac divided into?",
        answerChoices: ["12", "6", "10", "4"],
        correct: 0,
        message: "placeholder text for now",
        image: "question6"
    },
    {
        question: "The sign of Libra is ruled by which planet?",
        answerChoices: ["Mercury", "Pluto", "Venus", "Neptune"],
        correct: 2,
        message: "placeholder text for now",
        image: "question7"
    },
    {
        question: "Which planet controls sex drive and ambition?",
        answerChoices: ["Mars", "Venus", "Uranus", "Neptune"],
        correct: 0,
        message: "placeholder text for now",
        image: "question8"
    },
    {
        question: "Which keyword best represents the water element?",
        answerChoices: ["Practical", "Emotional", "Forceful", "Logical"],
        correct: 1,
        message: "placeholder text for now",
        image: "question9"
    },
    {
        question: "What are the 3 fire signs?",
        answerChoices: ["Aquarius, Aries, and Sagittarius", "Scorpio, Aries, and Leo", "Capricorn, Pisces, and Aries", "Aries, Sagittarius, and Leo"],
        correct: 3,
        message: "placeholder text for now",
        image: "question10"
    }
]


//Global Variables
var questionTimer = 15; // seconds user will have to guess each question
var answerTimer = 4; // seconds user is shown the correct answer before next question
var numberOfQuestions; // limit the number of questions per game
var interval;
var timeRemainingToGuess;
var currentQuestion = 0;

var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;

var gamePlay = {

    startGame: function(){
    $('#gameContent').show();
    $('#resultsPage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
    $('#unansweredQuestions').empty();
    $('#startPage').hide();
    $('#resultsPage').hide();
	currentQuestion = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
    unansweredQuestions = 0;
    gamePlay.startTime();
	triviaContent.newQuestion();
    },


    startTime: function(){
        $('#timeRemaining').html(questionTimer);
        interval = setInterval(gamePlay.countdown, 1000);
    },

    //decrease timer and when timer gets to 0, stop time
    countdown: function () {
        questionTimer--;
        $('#timeRemaining').html(questionTimer);
        if (questionTimer === 0) {
            gamePlay.stopTime();
        }
    },

    //stop time and show answer page
    stopTime: function () {
        clearInterval(interval);
        $('#gameContent').hide();
        $('#answerPage').show();
        triviaContent.showAnswer();
    },





}


var triviaContent = {
    //sets up new questions & answerList
    newQuestion: function(){
        $('#currentQuestion').html('Question #'+(currentQuestion+1)+' of '+triviaQuestions.length);
        $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');

        // for (var i = 0; i < triviaQuestions.length; i++) {


        // var answer1 = triviaQuestions[i].answerChoices[0];
        // var answer2 = triviaQuestions[i].answerChoices[1];
        // var answer3 = triviaQuestions[i].answerChoices[2];
        // var answer4 = triviaQuestions[i].answerChoices[3];
        var answerA = triviaQuestions[currentQuestion].answerChoices[0];
        var answerB = triviaQuestions[currentQuestion].answerChoices[1];
        var answerC = triviaQuestions[currentQuestion].answerChoices[2];
        var answerD = triviaQuestions[currentQuestion].answerChoices[3];

        $('#answerA').append(answerA);
        $('#answerB').append(answerB);
        $('#answerC').append(answerC);
        $('#answerD').append(answerD);
        // $('#answerB').append(triviaQuestions[currentQuestion].answerChoices[i]);

        // }
    },


    showAnswer: function(){

    },

}



window.onload = function () {
    var startButton = $('#startButton');
    startButton.on("click", gamePlay.startGame);
    var playAgainButton = $('#playAgainButton');
    playAgainButton.on('click', gamePlay.startGame);

};




// $(document).ready(gamePlay);