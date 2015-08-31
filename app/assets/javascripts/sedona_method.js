$(document).ready(function() {


  // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
  (function() {

    var num = 1;

    // http://stackoverflow.com/questions/18642485/ruby-on-rails-displaying-images-at-random
    $(".sedonaButtons").on("click", function(){

      // question(num);
      if(num<4){
        question(num);
        num++;
      }
      // else{
      //   num=0
      // }

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

        // $("#sedonaNoToWouldYouLetItGoButton").on("click", function(){
        //   $("#sedona_questions").html("Would I rather have this feeling, or would I rather be free?");
        //   $("#sedonaFreeButton").show();
        // });

      }
      // else{
      //   $("#sedona_questions").html("When? This is an invitation to just let it go NOW. ");
      //   $("#sedonaFreeButton").hide();
      //   $("#sedonaYesButton").hide();
      //   $("#sedonaNoToWouldYouLetItGoButton").hide();
      //   $("#sedonaNowButton").show();
      // }
    }
    // <%= button_tag "Next", :class => "btn btn-primary", :type => "button", :id => "sedonaButton", :size => "166x66" %>
    // <%= button_tag "Yes", :class => "btn btn-primary", :type => "button", :id => "sedonaYesButton", :size => "166x66" , :style => "display: none;" %>
    // <%= button_tag "No", :class => "btn btn-primary", :type => "button", :id => "sedonaNoButton", :size => "166x66" , :style => "display: none;" %>
    // <%= button_tag "Now", :class => "btn btn-primary", :type => "button", :id => "sedonaNowButton", :size => "166x66", :style => "display: none;" %>
    // <%= button_tag "I would rather be free", :class => "btn btn-primary", :type => "sedonaFreeButton", :id => "sedonaButton", :size => "166x66", :style => "display: none;" %>


    // http://stackoverflow.com/questions/18642485/ruby-on-rails-displaying-images-at-random
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
      // $("#sedonaYesToWouldYouLetItGoButton").hide();
      // $("#sedonaNoToWouldYouLetItGoButton").hide();
      $("#sedonaNowButton").show();
    }


    $("#sedonaNowButton").on("click", function(){
      $("#sedonaNowButton").hide();
      num=0;
      question(num);
    });




  })();

});
