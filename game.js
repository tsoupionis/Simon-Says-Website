var buttonColors = ["red", "blue", "green", "yellow"]; //all colors in Simon Says
var gamePattern = []; // initialize game pattern
var userClickedPattern = []; // initialize user clicked pattern
nextSequence();

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id"); // picks the button color you click on 
    userClickedPattern.push(userChosenColor); // gets added to pattern

    playSound(userChosenColor); // plays the sound when clicked 
    
    animatePress(userChosenColor);
})

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4); // random number between 0 and 3
    var randomChosenColor = buttonColors[randomNumber]; // assigns a random color using the random number
    gamePattern.push(randomChosenColor); //keeps the game going by adding each color into a pattern 

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) // flash animation 
    playSound(randomChosenColor); // plays the sound when of color chosen for pattern
}

function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress (currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed"); }, 100);
}