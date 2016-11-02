//business logic

function Scores(score) {
  this.score = score;
}


// function RoundMath(number) {
//   debugger;
//   this.newNumber = number;
// }

// RoundMath.prototype.player1 = function() {
// if (this.newNumber > 1){
// var player1total = counter += this.newNumber;
// return counter;
// }
//   else {
//     return counter = 0;
//   }
// return counter;
// }


function checkRoll(roll) {
  if (roll > 1){
  var player1total = counter += roll;
  return counter;
  }
    else {
      return counter = 0;
    }
  return counter;
}



//user interface
$(document).ready(function() {
  var score1 = new Scores(0);
  counter = 0;


  $("#roll").click(function(event) {
    event.preventDefault();



    var rollNum = Math.floor(Math.random()*6 + 1);
    // rollResult = new RoundMath(rollNum);

    // rollResult.newNumber = rollResult.player1(rollResult);
    rollResult = checkRoll(rollNum);
    $("output#roundtotal").text(counter);

  });
  $("#hold").click(function(event) {
    event.preventDefault();
    debugger;
    counter = 0;
    $("output#roundtotal").text(counter)
    score1.score += rollResult;


    $("output#player1").text(score1.score);

  });
});
