$(document).ready(function() {

  // for spinning wheel ********************************************************
  //
  // var angle = 180;
  // setInterval(function(){
  //       angle+=5;
  //      $("#rotateContainer").rotate(angle);
  // },50);

  // https://pixabay.com/en/vibrant-background-hypnotic-757820/
  var angle = 180;
  $("#spin_me").on("click", function(){
    var interval;
    if($(this).text() == "Start"){ // check button label
      $(this).html("<span class='ui-button-text'>Pause</span>");
      rotateContainer();
    }
    else {  // check button label
      $(this).html("<span class='ui-button-text'>Start</span>");
      clearTimeout(timer); // stick the clearInterval in a click event
    }
  });

  function rotateContainer() {
    angle+=3;
    $("#rotateContainer").rotate(angle);
    // https://www.codecademy.com/forum_questions/525e864c80ff338580001a53
    timer = setTimeout(rotateContainer, 50);
  }






});
