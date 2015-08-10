$(document).ready(function() {


  //code to change background color with button********************************************************

  var safeColors = ['00','33','66','99','cc','ff'];
  var rand = function() {
    return Math.floor(Math.random()*6);
  };
  var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
  };

  var body = $('body');
  // var backgrounds = ['url(http://static.jsbin.com/images/jsbin_static.png)', 'url(http://static.jsbin.com/images/popout.png)'];
  // var current = 0;


  function nextBackground() {
    $('body').each(function() {
      $(this).css('background',randomColor());
    });
    // https://www.codecademy.com/forum_questions/525e864c80ff338580001a53
    timer = setTimeout(nextBackground, 3000);
  }

  $("#start_pause").on("click", function(){
    // Start button
    if($(this).text() == "Start"){  // check button label
      $(this).html("<span class='ui-button-text'>Pause</span>");
      nextBackground();
    }
    // Pause button
    else{
      body.css('background',000000);
      // body.css('background', backgrounds[0]);
      $(this).html("<span class='ui-button-text'>Start</span>");
      clearTimeout(timer);
    }
  });





});
