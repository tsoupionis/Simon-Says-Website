var buttonColors = ["red", "blue", "green", "yellow"]; //all colors in Simon Says
var gamePattern = []; // initialize game pattern


function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4); // random number between 0 and 3
    var randomChosenColor = buttonColors[randomNumber]; // assigns a random color using the random number
    gamePattern.push(randomChosenColor); //keeps the game going by adding each color into a pattern 
}