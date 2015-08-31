$(document).ready(function() {


  // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
  (function() {

    var num = 0;

    // http://stackoverflow.com/questions/18642485/ruby-on-rails-displaying-images-at-random
    $("#sedonaButton").on("click", function(){

      question(num);
      if(num<4){
        num++;
      }
      else{
        num=0
      }

    });

    function question(num){
      if(num==0){
        $("#sedona_questions").html("Focus on an issue that you would like to feel better about, and then allow yourself to feel whatever you are feeling in this moment.");
        // num++;
      }
      else if (num==1){
        $("#sedona_questions").html("Could I welcome this feeling? Yes or no are both acceptable answers.");
        // num++;
      }
      else if (num==2){
        $("#sedona_questions").html("Could I let this feeling go? Yes or no are both acceptable answers.");
        // num++;
      }
      else if (num==3){
        $("#sedona_questions").html("Would I let this feeling go?");
        num++;
      }
      else{
        $("#sedona_questions").html("When? This is an invitation to just let it go NOW. ");
        // num=0;
      }

    }


  })();

});
