//business logic
var player1 = new Player();
var rollValue;

function Player() {
  this.round = 0;
  this.total = 0;
}


 Player.prototype.rollDice = function() {
debugger;
   rollValue = Math.floor(Math.random()*6 + 1);


 }

Player.prototype.scoreRound = function() {
debugger;
 if (rollValue === 1) {
   this.round = 0;
 } else {
   this.round += rollValue;
 }
}

Player.prototype.totalScore = function () {
  this.totalscore += this.round;
}



//user interface
$(document).ready(function() {


  $("#roll").click(function(event) {
    event.preventDefault();
debugger;
    player1.rollDice();

    if (rollValue ===1) {
      player1.scoreRound(player1.rollValue);
    }
      else {
        player1.scoreRound();
    }

  $("output#roundtotal").text(player1.round);

  });
  $("#hold").click(function(event) {
    event.preventDefault();


  });
});
