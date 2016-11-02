counter = 0;
//business logic

function Player(round, total) {
  this.round = round;
  this.total = total;
}


 Player.prototype.rollDice = function() {
   var rollNum = Math.floor(Math.random()*6 + 1);
   return rollNum += this.round;

   if (rollResult > 1){
   var roundTotal = counter += this.newNumber;
   return counter;
   }
     else {
       return counter = 0;
     }
   return counter;
   }


  //function checkRoll(roll) {
    //if (roll > 1){
    //var player1total = counter += roll;
    //return counter;
    //}
      //else {
        //return counter = 0;
      //}
    //return counter;
  //}



//user interface
$(document).ready(function() {
  console.log(player1)
  console.log(player1.score)
  //player1.checkRoll();
  console.log(player1.score)


  $("#roll").click(function(event) {
    event.preventDefault();

    var player1 = new rollDice();
    var rollNum = 0;
    //var rollNum = Math.floor(Math.random()*6 + 1);
     var new rollResult = new Player(round, total);
    //console.log("roll result:" + rollResult)
    rollResult.newNumber = rollResult.checkroll(rollResult);

    //$("output#roundtotal").text(counter);

  });
  $("#hold").click(function(event) {
    event.preventDefault();
    //counter = 0;
    var hold = new Player(rollResult);
    console.log(Player.score)

    $("output#player1").text(hold.score);

  });
});
