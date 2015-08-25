$(document).ready(function() {

  // http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals
  (function() {

    var currentTime;
    var timer2;

    var restartTime;
    var startTime;

    var intervalTime;
    var intervalBell;


    $("#start_meditation").on("click", function(){

      clearInterval(currentTime);

      if($(this).text() == "Start"){  // check button label

        jQuery(function ($) {
          // var twentyFiveMinutes = 60 * 25,
          // var fiveMinutes = 60 * 5,
          display = $('#time');

          startTime = $("#meditation_time").val();
          intervalTime = $("#interval_time").val();

          // startTime = 6;

          if(isNaN(startTime) || startTime=="" || isNaN(intervalTime) || intervalTime=="") {
            // http://stackoverflow.com/questions/960736/appending-an-error-message-want-to-clear-the-div-first
            $('#status').html("Please enter a valid number");
            $('#meditation_time').append('<p class="error">Please enter valid numbers into the above fields.</p>');
          }
          else {
            $("#start_meditation").html("Reset");

            // convert to minutes
            startTime*=60;

            startTimer(startTime, display);
            // startTimer(twentyFiveMinutes, display);
            intervalTime*=60;
            startIntervalTimer(intervalTime);

            $("#meditation_time").prop('disabled', true);
            $("#interval_time").prop('disabled', true);
            $('#status').html("");

          }

        });
      }
      else{
        $(this).html("<span class='ui-button-text'>Start</span>");
        // $("#time").html("25:00");
        $("#time").html("");
        $("#resume_meditation").hide();
        $("#stop_meditation").show();

        $("#meditation_time").val("");
        $("#interval_time").val("");

        clearInterval(currentTime);
        clearInterval(intervalBell);

        $("#meditation_time").prop('disabled', false);
        $("#interval_time").prop('disabled', false);
      }
    });

    $("#stop_meditation").on("click", function(){
      restartTime=timer2;
      clearInterval(currentTime);
      clearInterval(intervalBell);
      if($("#start_meditation").text() == "Reset"){  // check button label
        $("#stop_meditation").hide();
        $("#resume_meditation").show();
      }

    });




    $("#resume_meditation").on("click", function(){
      clearInterval(currentTime);

      jQuery(function ($) {
        restartTime=timer2;
        display = $('#time');
        startTimer(restartTime, display);
        startIntervalTimer(intervalTime);
        // startTimer(fiveMinutes, display);
      });
      if($("#start_meditation").text() == "Reset"){  // check button label
        $("#resume_meditation").hide();
        $("#stop_meditation").show();
      }


    });

    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      currentTime = setInterval(function () {
        timer2=timer;
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
          // timer = duration;
          timerHitsZero()
          // clearInterval(currentTime);
          // $("#time").html("25:00")
          // $("#start_timer").html("Start");
        }
      }, 1000);
    }


    function timerHitsZero() {
      clearInterval(currentTime);
      clearInterval(intervalBell);
      // $("#time").html("25:00")
      $("#time").html("Good job :)")
      // $("#start_meditation").html("Start");
      $("#start_meditation").html("Reset");

      // http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
      var audio = new Audio('MeditationBell_30.mp3');
      audio.play();
    }





    function startIntervalTimer(intervalTime) {
      // multiply by 1000 for 1 second, 60 for 1 minute
      intervalTime *= 1000;

      intervalBell = setInterval(function() {
        var audio2 = new Audio('preview.mp3');
        // audio2.play();
        audio2.play(); }, intervalTime);
      }


    })();
    
  });
