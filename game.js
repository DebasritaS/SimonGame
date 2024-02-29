var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
$(document).one("keydown", function () {
  $("h1").text("Level "+ level );
nextSequence();
});
function nextSequence(){
  userClickedPattern=[];
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour= buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
level++;
$("h1").text("Level "+ level );
return 0;
}
function playSound(name){
  var audio= new Audio("sounds/" + name + ".mp3");
  audio.play();
  return 0;
}


$(".btn").click(function(event){
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
if (userChosenColour===gamePattern[(userClickedPattern.length)-1]){
  if((userClickedPattern.length)===(gamePattern.length)){
  setTimeout(function(){nextSequence();},1000);
  }
}else{
  var a=$("body");
    a.addClass("game-over");
    setTimeout(function(){
    a.removeClass("game-over");
  },200);
  var audio= new Audio("sounds/wrong.mp3");
  $("h1").text("Game Over, Press Any Key to Restart");
  audio.play();
  startOver();

}

    return 0;
});
function animatePress(currentColour){
var a=$("."+currentColour);
  a.addClass("pressed");
  setTimeout(function(){
  a.removeClass("pressed");
},100);
}
function startOver(){
  level=0;
  gamePattern=[];
$(document).one("keydown",function(){nextSequence();});
}
