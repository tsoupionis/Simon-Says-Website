var buttonColors = ["red", "blue", "green", "yellow"]; //all colors in Simon Says
var gamePattern = []; // initialize game pattern
var userClickedPattern = []; // initialize user clicked pattern
var started = false; // game started is set to false 

var level = 0; // level 0 

$(document).keydown(function(){ // keypress for any key 
    if (!started) { // if game hasn't started 
        $("#level-title").text("Level " + level); // initialize to level 0 
        nextSequence(); //call next sequence
        started = true; //game has started 
    }
})


$(".btn").click(function() { 
    var userChosenColor = $(this).attr("id"); // picks the button color you click on 
    userClickedPattern.push(userChosenColor); // gets added to pattern

    playSound(userChosenColor); // plays the sound when clicked 
    
    animatePress(userChosenColor); // gives pressed event when clicked
    
    checkAnswer(userClickedPattern.length - 1); 
    // last index in array is always length of array minus 1
})

function nextSequence () {
    userClickedPattern = [];

    level++; // add a new level for next sequence 
    $("#level-title").text("Level " + level); 
    // change the text so that it is up to the level you are at 

    var randomNumber = Math.floor(Math.random() * 4); // random number between 0 and 3
    var randomChosenColor = buttonColors[randomNumber]; // assigns a random color using the random number
    gamePattern.push(randomChosenColor); //keeps the game going by adding each color into a pattern 

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) // flash animation 
    playSound(randomChosenColor); // plays the sound when of color chosen for pattern
}

function playSound (name) { // function for audio, but audio given has no sound
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function animatePress (currentColor) {
    $("#" + currentColor).addClass("pressed"); // adds CSS pressed class
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed"); }, 100); // removes the class 100 ms after being pressed
}

function checkAnswer (currentLevel) { 
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) { 
    // if the game pattern color is the same as the user color clicked in their arrays at each level
        if (userClickedPattern.length  === gamePattern.length) {
            setTimeout(function () {
                nextSequence(); }, 1000);
                // goes to next sequence after a second
        }
    }
    else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play(); // sound when you are wrong 
        $("body").addClass("game-over"); // adds a css class called game-over
        setTimeout(function () {
            $("body").removeClass("game-over"); }, 200);
        $("#level-title").text("Game Over, Press Any Key To Restart"); 
        // replaces level-title with game over text
        startOver(); // calls startOver function to start the game over in the same way started originally
    }
}

function startOver () { // resets everything 
    level = 0; 
    gamePattern = [];
    started = false;
}
    

