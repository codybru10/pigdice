//business logic



// var rollValue;

function Player() {
  this.rollValue = 0;
  this.round = 0;
  this.total = 0;
}

function Game(player1, player2) {
  this.player1 = new Player();
  this.player2 = new Player();
  this.currentPlayer = player1;
}

 Player.prototype.rollDice = function() {
  //  rollValue = Math.floor(Math.random()*6 + 1);
   this.rollValue = Math.floor(Math.random()*6 + 1);



 } //add if

Player.prototype.scoreRound = function() {
 if (this.rollValue === 1) {
   this.round = 0;
  
 } else {
   this.round += this.rollValue;
 }


}

Player.prototype.totalScore = function () {
  this.total += this.round;
}

Player.prototype.resetRoll = function () {
  this.round = 0;
  return this.round;
}

Player.prototype.gameOver = function () {
  if (this.total >= 20){
    this.total = "Winner winner chicken dinner!"
  } else {}
}

Player.prototype.switch = function () {
  if (this.rollValue === 1){

  }

}


//user interface
$(document).ready(function() {
  var player1 = new Player();
  var player2 = new Player();
  var thisGame = new Game(player1, player2);
  $("#roll2").hide();
  $("#hold2").hide();


  $("#roll1").click(function(event) {
    event.preventDefault();
    player1.rollDice();
    player1.scoreRound(player1.rollValue);



  $("output#roundtotal").text(player1.round);
  debugger;
  if(player1.round === 0) {
    $("#roll1").hide();
    $("#hold1").hide();
    $("#roll2").show();
    $("#hold2").show();
  }

  });
  $("#hold1").click(function(event) {
    event.preventDefault();
    player1.totalScore(player1.rollValue);
    player1.gameOver(player1.rollValue);
    $("output#player1").text(player1.total);
    console.log(player1.total)
    $("output#roundtotal").text(0);
    player1.resetRoll();
    $("#hold1").hide();
    $("#roll1").hide();
    $("#hold2").show();
    $("#roll2").show();


  });
  $("#roll2").click(function(event) {
    event.preventDefault();
    player2.rollDice();
    player2.scoreRound(player2.rollValue);


  $("output#roundtotal").text(player2.round);

  if(player2.round === 0) {
    $("#roll2").hide();
    $("#hold2").hide();
    $("#roll1").show();
    $("#hold1").show();
    }

  });
  $("#hold2").click(function(event) {
    event.preventDefault();
    player2.totalScore(player2.rollValue);
    player2.gameOver(player2.rollValue);
    $("output#player2").text(player2.total);
    console.log(player2.total)
    $("output#roundtotal").text(0);
    player2.resetRoll();
    $("#hold2").hide();
    $("#roll2").hide();
    $("#hold1").show();
    $("#roll1").show();



  });
});
