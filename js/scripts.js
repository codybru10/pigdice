//business logic



// var rollValue;

function Player() {
  this.rollValue = 0;
  this.round = 0;
  this.total = 0;
}

function Game(player1, player) {
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

 //CHECK FOR WIN ON ROLL
 if(this.total + this.round >= 20) {
   console.log("test win");
   this.total = "Winner winner chicken dinner!"
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
    return this.total = "Winner winner chicken dinner!"
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

  $("#roll").click(function(event) {
    event.preventDefault();
    player1.rollDice();
    player1.scoreRound(player1.rollValue);


  $("output#roundtotal").text(player1.round);

  });
  $("#hold").click(function(event) {
    event.preventDefault();
debugger;
    player1.totalScore(player1.rollValue);
    player1.gameOver(player1.rollValue);
    $("output#player1").text(player1.total);
    $("output#roundtotal").text(0);
    player1.resetRoll();

    

  });
});
