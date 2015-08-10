$(document).ready(function() {

var currentTime;
var timer2;
var restartTime;

  $("#start_timer").on("click", function(){

    clearInterval(currentTime);

    jQuery(function ($) {
      var twentyFiveMinutes = 60 * 25,
      // var fiveMinutes = 60 * 5,
      display = $('#time');
      startTimer(twentyFiveMinutes, display);
      // startTimer(fiveMinutes, display);
    });

  });


  $("#stop_timer").on("click", function(){

    // timer = currentTime;
    // console.log(currentTime);
    restartTime=timer2;
    clearInterval(currentTime);
          console.log(timer2);
  });


    $("#resume_timer").on("click", function(){
    clearInterval(currentTime);

          jQuery(function ($) {
          restartTime=timer2;
            display = $('#time');
            startTimer(restartTime, display);
            // startTimer(fiveMinutes, display);
          });

    });






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
          timer = duration;
        }
      }, 1000);
    }





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
        timer = duration;
      }
    }, 1000);
  }


});
