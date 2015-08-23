$(document).ready(function() {

  var currentTime;
  var timer2;
  var restartTime;

  $("#start_timer").on("click", function(){

    clearInterval(currentTime);

    if($(this).text() == "Start"){  // check button label
      $(this).html("Reset");

      jQuery(function ($) {
        var twentyFiveMinutes = 60 * 25,
        // var fiveMinutes = 60 * 5,
        display = $('#time');
        // startTimer(3, display);
        startTimer(twentyFiveMinutes, display);
        // startTimer(fiveMinutes, display);
      });
    }
    else{
      $(this).html("<span class='ui-button-text'>Start</span>");
      $("#time").html("25:00")
      $("#resume_timer").hide();
      $("#stop_timer").show();
    }



  });


  $("#stop_timer").on("click", function(){

    // timer = currentTime;
    // console.log(currentTime);
    restartTime=timer2;
    clearInterval(currentTime);
    // console.log(timer2);
    if($("#start_timer").text() == "Reset"){  // check button label
      $("#stop_timer").hide();
      $("#resume_timer").show();
    }

  });




  $("#resume_timer").on("click", function(){
    clearInterval(currentTime);

    jQuery(function ($) {
      restartTime=timer2;
      display = $('#time');
      startTimer(restartTime, display);
      // startTimer(fiveMinutes, display);
    });
    if($("#start_timer").text() == "Reset"){  // check button label
      $("#resume_timer").hide();
      $("#stop_timer").show();
    }


  });






  /*
  function resumeTimer(duration, display) {
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


  */


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
    $("#time").html("25:00")
    $("#start_timer").html("Start");
  }


});
