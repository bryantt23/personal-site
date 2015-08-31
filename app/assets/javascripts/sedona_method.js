$(document).ready(function() {


  // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
  (function() {

    var num = 0;
    question(num);

    $(".sedonaButtons").on("click", function(){

      num++;
      question(num);
    });

    function question(num){
      if(num==0){
        $("#sedonaNowButton").hide();
        $("#sedonaButton").show();
        $("#sedona_questions").html("Focus on an issue that you would like to feel better about, and then allow yourself to feel whatever you are feeling in this moment.");
      }
      else if (num==1){
        $("#sedonaButton").hide();
        $("#sedonaYesButton").show();
        $("#sedonaNoButton").show();

        $("#sedona_questions").html("Could I welcome this feeling? Yes or no are both acceptable answers.");
      }
      else if (num==2){
        $("#sedona_questions").html("Could I let this feeling go? Yes or no are both acceptable answers.");
      }
      else {
        $("#sedonaNoButton").hide();
        $("#sedonaYesButton").hide();
        $("#sedonaYesToWouldYouLetItGoButton").show();
        $("#sedonaNoToWouldYouLetItGoButton").show();
        $("#sedona_questions").html("Would I let this feeling go? Yes or no are both acceptable answers.");
      }
    }

    $("#sedonaNoToWouldYouLetItGoButton").on("click", function(){
      $("#sedona_questions").html("Would I rather have this feeling, or would I rather be free?");
      $("#sedonaYesToWouldYouLetItGoButton").hide();
      $("#sedonaNoToWouldYouLetItGoButton").hide();
      $("#sedonaFreeButton").show();
    });

    $("#sedonaFreeButton").on("click", function(){
      lastQuestion();
    });

    $("#sedonaYesToWouldYouLetItGoButton").on("click", function(){
      $("#sedonaYesToWouldYouLetItGoButton").hide();
      $("#sedonaNoToWouldYouLetItGoButton").hide();
      lastQuestion();
    });

    function lastQuestion(){
      $("#sedona_questions").html("When? This is an invitation to just let it go NOW. ");
      $("#sedonaFreeButton").hide();
      $("#sedonaNowButton").show();
    }

    $("#sedonaNowButton").on("click", function(){
      $("#sedonaNowButton").hide();
      num=0;
      question(num);
    });


  })();

});
