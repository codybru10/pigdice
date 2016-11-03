//business logic
var player1 = new Player();
var rollValue;

function Player() {
  this.round = 0;
  this.total = 0;
}


 Player.prototype.rollDice = function() {
   rollValue = Math.floor(Math.random()*6 + 1);
 }

Player.prototype.scoreRound = function() {
 if (rollValue === 1) {
   this.round = 0;
 } else {
   this.round += rollValue;
 }
}

Player.prototype.totalScore = function () {
  this.total += this.round;
}

Player.prototype.resetRoll = function () {
debugger;
  this.round = 0;
  return this.round;
}



//user interface
$(document).ready(function() {


  $("#roll").click(function(event) {
    event.preventDefault();
    player1.rollDice();
    player1.scoreRound(rollValue);

  $("output#roundtotal").text(player1.round);

  });
  $("#hold").click(function(event) {
    event.preventDefault();
debugger;
    player1.totalScore(rollValue);
    $("output#player1").text(player1.total);
    $("output#roundtotal").text(0);
    player1.resetRoll();

  });
});
