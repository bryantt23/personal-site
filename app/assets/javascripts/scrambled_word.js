$(document).ready(function() {

  (function() {
    // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
    var answer;


    // listen for guessButton click
    $('#guessButton').click(function(){

      // take the value entered in the city_name textbox
      var guessEntered = $('#guessed-word').val();

      $("#yourGuess").text("You guessed " + guessEntered);

    });

    // listen for getScrambledWordButton click
    $('#getScrambledWordButton').click(function(){

      // take the value entered in the city_name textbox
      //****************************** this changes the variable using this
      // *******************************************************
      this.answer = getWord();

    });


    // listen for guessButton click
    $('#checkButton').click(function(){

      // take the value entered in the city_name textbox
      var guessEntered = $('#guessed-word').val();

      areTheyTheSameWord(guessEntered);

    });

    function areTheyTheSameWord(guessEntered){
      console.log('answer');
      // console.log(window['answer'].text);
      console.log(answer);
      // http://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
      if(answer===guessEntered.toLowerCase().replace(/\s/g, '')){
        // console.log('same');
        // alert('same');
        $("#guessResult").text("Your guess is correct!");
      }
      else {
        // console.log('not same');
        $("#guessResult").text("Your guess is incorrect!");
        // alert('not same');

      }
    };

    // def are_they_the_same_word?(guess, answer)
    //   return guess.gsub(/\s+/, "").downcase==answer.downcase
    // end

    function getWord(){
      myArray = ["control", "power", "uranium", "weapons", "human", "slaves", "dictatorship", "oppressor", "tycoon", "tyrant", "sovereign", "exterminate", "terminate", "vanquish", "raze", "demolish", "institutionalize", "annihilate", "decimate", "eradicate", "obliterate", "slaughter", "belize", "squash"];

      // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
      answer = myArray[Math.floor(Math.random()*myArray.length)];

      //  alert('helo');
      $("#theAnswer").text("Here is the answer " + answer);
    }


    // // http://stackoverflow.com/questions/16856864/overriding-global-variable
    // (function getWord(){
    //   myArray = ["control", "power", "uranium", "weapons", "human", "slaves", "dictatorship", "oppressor", "tycoon", "tyrant", "sovereign", "exterminate", "terminate", "vanquish", "raze", "demolish", "institutionalize", "annihilate", "decimate", "eradicate", "obliterate", "slaughter", "belize", "squash"];
    //
    //   // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    //   answer = myArray[Math.floor(Math.random()*myArray.length)];
    //
    //   //  alert('helo');
    //   $("#theAnswer").text("Here is the answer " +answer);
    // })();



    // http://stackoverflow.com/questions/1841916/how-to-avoid-global-variables-in-javascript
    // Expose to global
    // answer = getWord();
    // window['answer'] = answer;
  })();

  // http://www.mkyong.com/javascript/javascript-call-funtion-after-page-load/
  //call after page loaded
  // window.onload=getWord;

});
