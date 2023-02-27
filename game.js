var buttonColors = ["red", "blue", "green", "yellow"]; //all colors in Simon Says
var gamePattern = []; // initialize game pattern
nextSequence();

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4); // random number between 0 and 3
    var randomChosenColor = buttonColors[randomNumber]; // assigns a random color using the random number
    gamePattern.push(randomChosenColor); //keeps the game going by adding each color into a pattern 
    
     
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    $("#" + randomChosenColor).click(function () {
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3")
        audio.play();
    });
}