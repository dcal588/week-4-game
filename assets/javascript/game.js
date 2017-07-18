$(document).ready(function(){
  var wins = 0;
  var losses = 0;
  var computerNumber = Math.floor(Math.random() * 102) + 19;
  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;
  var playerNumbers = [];
  $("#computernumberbox").html(computerNumber);
  $("#crystalonebox").html(crystal1);
  $("#crystaltwobox").html(crystal2);
  $("#crystalthreebox").html(crystal3);
  $("#crystalfourbox").html(crystal4);
  $("#playernumber").html("0");

  $(".crystal").on('click', function(){
    var crystalVal = $(this).html();
    playerNumbers.push(crystalVal);
    var crystalTotal = 0;
    for (var i = 0; i < playerNumbers.length; i++) {
      crystalTotal += playerNumbers[i] << 0;
    }
    $("#playernumber").html(crystalTotal);
    if (crystalTotal === computerNumber) {
      wins++
      $("#wins").html(wins);
      computerNumber = Math.floor(Math.random() * 102) + 19;
      crystalTotal = 0;
      crystal1 = Math.floor(Math.random() * 12) + 1;
      crystal2 = Math.floor(Math.random() * 12) + 1;
      crystal3 = Math.floor(Math.random() * 12) + 1;
      crystal4 = Math.floor(Math.random() * 12) + 1;
      $("#playernumber").html("0");
    }
    if (crystalTotal > computerNumber) {
      losses++
      $("#losses").html(losses);
      computerNumber = Math.floor(Math.random() * 102) + 19;
      crystalTotal = 0;
      crystal1 = Math.floor(Math.random() * 12) + 1;
      crystal2 = Math.floor(Math.random() * 12) + 1;
      crystal3 = Math.floor(Math.random() * 12) + 1;
      crystal4 = Math.floor(Math.random() * 12) + 1;
      $("#playernumber").html("0"); 
          console.log(playerNumber);
    }
  });
});
