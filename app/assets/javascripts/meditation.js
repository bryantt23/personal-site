$(document).ready(function() {

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
        console.log(startTime);

        // startTime = 6;

        if(isNaN(startTime) || startTime=="") {
          $(this).html("Reset");

          console.log("enter valid number"); //change this to append error message
          // $('#meditation_time').text="zzz";
          $('#meditation_time').append('<p class="error">Please enter valid numbers into the above fields.</p>');
        }
        else {
          startTimer(startTime, display);
          // startTimer(twentyFiveMinutes, display);
          startplaying();
        }
      });
    }
    else{
      $(this).html("<span class='ui-button-text'>Start</span>");
      // $("#time").html("25:00");
      $("#time").html(startTime);
      $("#resume_meditation").hide();
      $("#stop_meditation").show();
    }
  });


  $("#stop_meditation").on("click", function(){

    // timer = currentTime;
    // console.log(currentTime);
    restartTime=timer2;
    clearInterval(currentTime);
    // console.log(timer2);
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

      // console.log(timer2);
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
    $("#time").html("25:00")
    $("#start_meditation").html("Start");

    // http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
    var audio = new Audio('MeditationBell_30.mp3');
    audio.play();
  }



  function startplaying() {
    intervalBell = setInterval(function() {
      var audio2 = new Audio('preview.mp3');
      // audio2.play();
      audio2.play(); }, 4000);
    }
  });
