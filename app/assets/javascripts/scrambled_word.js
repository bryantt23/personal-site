$(document).ready(function() {

  (function() {
    // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
    var answer;



    // listen for guessButton click
    $('#getAnswer').click(function(){

      //  alert('helo');
      $("#theAnswer").text("Here is the answer " + answer);

    });



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
      // console.log('answer');
      // console.log(window['answer'].text);
      // console.log(answer);
      // http://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
      if(answer===guessEntered.toLowerCase().replace(/\s/g, '')){
        // console.log('same');
        // alert('same');
        $("#guessResult").text("Your guess is correct!");
      }
      else {
        // console.log('not same');
        $("#guessResult").text("Your guess is incorrect! " );
        // alert('not same');
        if(guessEntered.length<answer.length){
          $("#guessResult").append("You have too few letters.");
        }
        else if(guessEntered.length>answer.length){
          $("#guessResult").append("You have too many letters.");
        }
        else{
          // check to see if the guess and answer are anagrams
          // http://codereview.stackexchange.com/questions/99247/determining-if-two-words-are-anagrams
          if(guessEntered.split('').sort().join('')==answer.split('').sort().join('')){
            // if they are anagrams, say you are close, just move the letters around
            $("#guessResult").append("You have the correct letters. Keep rearranging the letters to get the correct answer.");


          }
          else{
            // if they are not anagrams, say you have letters that are not in the answer
            $("#guessResult").append("Your guess has letter(s) that are not in the answer.");
          }


        }


      }
    };

    function getWord(){
      myArray = ["control", "power", "uranium", "weapons", "human", "slaves", "dictatorship", "oppressor", "tycoon", "tyrant", "sovereign", "exterminate", "terminate", "vanquish", "raze", "demolish", "institutionalize", "annihilate", "decimate", "eradicate", "obliterate", "slaughter", "belize", "squash"];

      // http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
      answer = myArray[Math.floor(Math.random()*myArray.length)];

      // http://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
      var shuffled = answer.split('').sort(function(){return 0.5-Math.random()}).join('');
      $("#scrambled-word").text("Here is the scrambled word: " + shuffled);

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
