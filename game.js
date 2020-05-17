var audioWrong = new Audio("sounds/wrong.mp3");
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var levelNumber = 0;
var startFlag = 0;
var userChosenColour;


  $(document).keypress(function(){
    if(startFlag == 0){
      startFlag = 1;
      nextSequence();

    }});


$(".btn").click(function(){ userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length - 1);

});

function playSound(name){
var soundEffect = new Audio("sounds/"+name+".mp3");
soundEffect.play();

}
function checkAnswer(currentlevel){

if(gamePattern[currentlevel] == userClickedPattern[currentlevel]){
    if(gamePattern.length == userClickedPattern.length){
    setTimeout(function(){nextSequence(); userClickedPattern = []; i = 0;},1000);
  }

}
else{
  audioWrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");}, 200);
  $("h1").text("Game Over. Press any key to reset.");
  startOver();
}

}
function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){$("#" + currentColour).removeClass("pressed");},100);

}


function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern[gamePattern.length] = randomChosenColour;
  $("#level-title").text("Level " + levelNumber);
  levelNumber++;
  playSound(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}

function startOver(){

startFlag = 0;
levelNumber = 0;
gamePattern = [];
userClickedPattern = [];


}
