$(document).ready(function() {




  // listen for weatherButton click
  $('#guessButton').click(function(){

    // take the value entered in the city_name textbox
    var guessEntered = $('#guessed-word').val();

    $("#yourGuess").text("You guessed " + guessEntered);

  });

  function getWord(){
    myArray = ["control", "power", "uranium", "weapons", "human", "slaves", "dictatorship", "oppressor", "tycoon", "tyrant", "sovereign", "exterminate", "terminate", "vanquish", "raze", "demolish", "institutionalize", "annihilate", "decimate", "eradicate", "obliterate", "slaughter", "belize", "squash"];

    // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    var item = myArray[Math.floor(Math.random()*myArray.length)];

      //  alert('helo');
    $("#theAnswer").append("Here is the answer " +item);
  };


  function happycode(){
     alert('helo');
  }

  //call after page loaded
  window.onload=getWord;

});
