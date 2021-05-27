alert("hello");
var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var userClickPattern = [];
var level = 0;
var started = 0;


$("body").keypress(handle);
function handle(){
    if(started === 0)
    {
      sequence();
      started = 1;
    }
}

function sequence() {
  level++;
  $("h1").html("level "+level);
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  userClickPattern = [];
  var str = "#"+randomChosenColor;
  $(str).fadeIn(50).fadeOut(50).fadeIn(50);
  prsshadow(randomChosenColor);
  playSound(randomChosenColor);
}


$(".btn").click(function() {
  userClickPattern .push(this.id);
  playSound(this.id);
  prsshadow(this.id);
  console.log(userClickPattern);

   ccheck(userClickPattern.length -1);
  // console.log(userClickPattern );
});

function ccheck(len) {

  if(userClickPattern[len] === gamePattern[len]){
    if(level === (len+1)) {
      setTimeout(sequence, 400);
    }
  }
  else
  {
    $("h1").html("Your Score is " + (level)+"<br> Game Over,Press any key to continue");
    gmover();
    playSound("wrong");
    started = 0;
    level = 0;
    gamePattern = [];
    $("body").keypress(handle);
  }
}

function nextSequence() {
  var num = Math.floor((Math.random())*4);
  return num;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function prsshadow(name) {
  $("#"+name).addClass("pressed");

  setTimeout(timf,80);

  function timf(){
    $("#"+name).removeClass("pressed")
  }
}

function gmover() {

  $("body").addClass("game-over");

  setTimeout(tim,200);

  function tim() {
    $("body").removeClass("game-over");
  }
}
