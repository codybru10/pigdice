//business logic
function RoundMath(number,start) {
  debugger;
  this.newNumber = number;
  this.player = start;
}

RoundMath.prototype.player1 = function() {
  debugger;
  var player1total = this.newNumber += this.player;
  return player1total;

}




//user interface
$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    debugger;

    var rollNum = Math.floor(Math.random()*6 + 1);
    var startingTotal = 0;
    var rollResult = new RoundMath(rollNum,startingTotal);

    rollResult.newNumber = rollResult.player1(rollResult);
    $("output#roundtotal").text(rollResult.newNumber);
    $("output#player1").text(rollResult.player);


  });
});
