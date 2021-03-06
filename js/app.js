 $(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);
 
    });
 
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });
 
  var guessCount = 0;
  var gameNumber = 0;
 
  // Starting a new game
 
  function startGame () {
    guessCount = 0;
    $('#count').html(guessCount);
    $("#feedback").html ("Make your guess!");
    $("#guessList").html ("");
    gameNumber = Math.floor ( Math.random() * 100 );
    console.log(gameNumber);
  }
 
  $(".new").click (startGame);
 
  startGame();
 
  //guessButton and Feedback functionality
 
  $("#gameForm").submit (function (event) {
      event.preventDefault();
      guessCount++;
      $('#count').html(guessCount);
    var userInputNumber = parseInt ( $("#userGuess").val() );
    if (isNaN (userInputNumber) || userInputNumber < 1 || userInputNumber > 100) {
      $("#feedback").html ("Invalid number: please provide a number between 1 and 100.");
    } else {
      var feedbackBox = $("#feedback");
      var feedbackText = "";
        if (userInputNumber === gameNumber) {
          feedbackText = "YOU WIN!";
        } else {
      var difference = Math.abs(  gameNumber - userInputNumber );
        
          if (difference >= 50) {
            feedbackText = "Cold as Dry Ice";
          } else if (difference >= 35&& difference < 50 ) {
            feedbackText = "Cold";          
          } else if (difference >= 25 && difference < 35 ) {
            feedbackText = "Warm";
          } else if (difference >= 15 && difference < 25 ) {
            feedbackText = "Hot";
          } else if (difference >= 4.99 && difference < 14.99) { 
            feedbackText = "Caliente";
          }
        }
        $("#feedback").html (feedbackText);
    }
    $('#guessList').append("<li>" + userInputNumber + "</li>");
    $('#userGuess').val('');
    return;
  });
 
 
 });
