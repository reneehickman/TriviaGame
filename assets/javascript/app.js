

var triviaQuestions = [{
    question: "A person with an April 13th birthday would have which of the following Sun signs?",
    answerChoices: ["Scorpio", "Pisces", "Aries", "Taurus"],
    correct: 2,
    message: "placeholder text for now",
    image: "question-01"
},

{
    question: "The sign of Leo is represented by which of the following zodiac symbols?",
    answerChoices: ["The Ram", "The Crab", "The Bull", "The Lion"],
    correct: 3,
    message: "placeholder text for now",
    image: "question-02"
},
{
    question: "Capricorn is represented by which of the four elements?",
    answerChoices: ["Air", "Earth", "Water", "Fire"],
    correct: 1,
    message: "placeholder text for now",
    image: "question-03"
},
{
    question: "Which planet is symbolic of our emotional nature?",
    answerChoices: ["Sun", "Mars", "Moon", "Mercury"],
    correct: 2,
    message: "placeholder text for now",
    image: "question-04"
},
{
    question: "The Moon rules which sign of the zodiac?",
    answerChoices: ["Pisces", "Cancer", "Gemini", "Sagittarius"],
    correct: 1,
    message: "placeholder text for now",
    image: "question-05"
},
{
    question: "How many houses is the zodiac divided into?",
    answerChoices: ["12", "6", "10", "4"],
    correct: 0,
    message: "placeholder text for now",
    image: "question-06"
},
{
    question: "The sign of Libra is ruled by which planet?",
    answerChoices: ["Mercury", "Pluto", "Venus", "Neptune"],
    correct: 2,
    message: "placeholder text for now",
    image: "question-07"
},
{
    question: "Which planet controls sex drive and ambition?",
    answerChoices: ["Mars", "Venus", "Uranus", "Neptune"],
    correct: 0,
    message: "placeholder text for now",
    image: "question-08"
},
{
    question: "Which keyword best represents the water element?",
    answerChoices: ["Practical", "Emotional", "Forceful", "Logical"],
    correct: 1,
    message: "placeholder text for now",
    image: "question-09"
},
{
    question: "The 3 fire signs include Leo, Aries &  ________?",
    answerChoices: ["Taurus", "Scorpio", "Virgo", "Sagittarius"],
    correct: 3,
    message: "placeholder text for now",
    image: "question-10"
}
]

// $('#answerImg').html('<img src = "assets/images/'+ triviaQuestions[currentQuestion].image +'.png" width = "400px">');
// triviaQuestions[currentQuestion].image


//Global Variables
var questionTimer = 2; // seconds user will have to guess each question
var answerTimer = 1; // seconds user is shown the correct answer before next question
var numberOfQuestions; // limit the number of questions per game
var interval;
var timeRemainingToGuess;
var currentQuestion = 0;

var correctAnswers;
var incorrectAnswers;
var unansweredQuestions;
var userAnswer;
var answer;

var gamePlay = {

startGame: function(){
$('#gameContent').show();
$('#answerPage').hide();
$('#resultsPage').hide();
$('#correctAnswers').empty();
$('#incorrectAnswers').empty();
$('#unansweredQuestions').empty();
$('#startPage').hide();
currentQuestion = 0;
correctAnswers = 0;
incorrectAnswers = 0;
unansweredQuestions = 0;
gamePlay.startTime();
triviaContent.newQuestion();
},


startTime: function(){
    clearInterval(interval);
    questionTimer = 2;
    $('#timeRemaining').html(questionTimer);
    interval = setInterval(gamePlay.countdown, 1000);
},

//decrease timer and when timer gets to 0, stop time
countdown: function () {
    questionTimer--;
    $('#timeRemaining').html(questionTimer);
    if (questionTimer === 0) {
        answer = false;
        gamePlay.stopTime();
        
    }
},

//stop time and show answer page
stopTime: function () {
    clearInterval(interval);
    $('#gameContent').hide();
    $('#answerPage').show();
    $('.btn, .btn-primary, .btn-lg, .btn-block, .buttons').hide();
    $('#answerBox').empty();
    triviaContent.checkAnswer();
},

answerTime: function(){
    answerTimer = 1;
    interval = setInterval(gamePlay.answerCountdown, 1000);

},

answerCountdown: function(){
    answerTimer--;
    console.log(answerTimer);
    if (answerTimer === 0) {
        currentQuestion++;
        gamePlay.stopAnswerCountdown();
    }


},


stopAnswerCountdown: function(){
    if(currentQuestion == (triviaQuestions.length)){
        clearInterval(interval);
        gamePlay.showResultsPage(correctAnswers, incorrectAnswers, unansweredQuestions);
        
    }
    else{
    clearInterval(interval);
    $('#gameContent').show();
        $('#answerPage').hide();
        gamePlay.startTime();
     triviaContent.newQuestion();
    }
    
},

   //show results page
   showResultsPage: function () {
    clearInterval(interval);
    $('#answerPage').hide();
    $('#resultsPage').show();
    $('#gameContent').hide(); 
    $('#playAgainButton').show();
    $('#answerImg').empty();  
    $('#currentQuestion').empty();
    $('#correctAnswers').html(correctAnswers);
    $('#incorrectAnswers').html(incorrectAnswers);
    $('#unansweredQuestions').html(unansweredQuestions);
    currentQuestion = 0;
},




restartGame: function () {
        clearInterval(interval);
        // $('#gameContent').show();
        // $('#answerPage').hide();
        gamePlay.startGame();
        console.log(correctAnswers, incorrectAnswers, unansweredQuestions);
        console.log(currentQuestion);
        console.log(triviaQuestions[currentQuestion].question);




}




}//end of gamePlay object


var triviaContent = {
//sets up new questions & answerList
newQuestion: function(){
    $('#currentQuestion').html('Question #'+(currentQuestion+1)+' of '+triviaQuestions.length);
    if(currentQuestion == -1){
        gamePlay.startGame();
    }
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    answer = true;
        for (var i = 0; i < 4; i++){
        var buttons = $('<button>');
        buttons.text(triviaQuestions[currentQuestion].answerChoices[i]);
        buttons.attr({'data-index': i});
        buttons.addClass('btn btn-primary btn-lg btn-block buttons');
        $('.answerBox').append(buttons); 
    }


    $('.btn, .btn-primary, .btn-lg, .btn-block, .buttons').on('click',function(){
        userAnswer = $(this).data('index');
        gamePlay.stopTime();
	});
},


checkAnswer: function(){

    var correctAnswerText;
    var correctIndex;

    //correctAnswer = triviaQuestions[currentQuestion].answerChoices[triviaQuestions[currentQuestion].correct];
    correctIndex = triviaQuestions[currentQuestion].correct;
    // correctAnswer = triviaQuestions[currentQuestion].answerChoices[correctIndex];
        correctAnswerText = triviaQuestions[currentQuestion].answerChoices[correctIndex];
        $('#answerImg').html('<img src = "assets/images/'+ triviaQuestions[currentQuestion].image +'.jpg" width = "250px">');
        console.log(correctAnswerText);
        console.log(userAnswer);

        // console.log(correctAnswer);

        if (userAnswer == correctIndex && answer == true) {
            correctAnswers++;
            $('#answerText').html("<h4>That's Correct!</h4> ");

            console.log(correctAnswers);
        } else if (answer == false) {
            unansweredQuestions++;
            $('#answerText').html("<h4>Time is up!</h4>" + 'The correct answer is ' + correctAnswerText);
        } else {
            incorrectAnswers++;
            $('#answerText').html("<h4>That's incorrect!</h4>" + 'The correct answer is ' + correctAnswerText);
        }

        // $('#answerText').html("<h4>That's incorrect!</h4>" + 'The correct answer is ' + correctAnswerText + '<div class="space">&nbsp;</div>' + triviaQuestions[currentQuestion].message);
        // + '<div class="space">&nbsp;</div>' + triviaQuestions[currentQuestion].message
        

        gamePlay.answerTime();
        var playAgainButton = $('#playAgainButton');
        playAgainButton.on('click', gamePlay.restartGame);

}


}



window.onload = function () {
var startButton = $('#startButton');
startButton.on("click", gamePlay.startGame);

};





// $(document).ready(gamePlay);

