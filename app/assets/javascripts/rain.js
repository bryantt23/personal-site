$(document).ready(function() {

  $("#cloud").on("click", function(){
    // http://stackoverflow.com/questions/9890998/jquery-repeat-animation-for-x-times
    // http://jsfiddle.net/urtju/1/
    var speed = 700;
    var times = 3;
    var loop = setInterval(anim, 800);
    function anim(){
      times--;
      if(times === 0){clearInterval(loop);}
      $( "#cloud").effect( "shake", { times:1,direction:"up"} );
      $( "#cloud").effect( "shake", {times:1,direction:"right"} );
    }
    anim();
  });




  // Snow Falling
  function fallingSnow() {
    var $snowflakes = $(),
    createSnowflakes = function () {
      var qt = 20;
      for (var i = 0; i < qt; ++i) {
        var $snowflake = $('<div class="snowflakes"></div>');
        $snowflake.css({
          'left': (Math.random() * $('#site').width()) + 'px',
          'top': (- Math.random() * $('#site').height()) + 'px'
        });
        // add this snowflake to the set of snowflakes
        $snowflakes = $snowflakes.add($snowflake);
      }
      $('#snowZone').prepend($snowflakes);
    },

    runSnowStorm = function() {
      $snowflakes.each(function() {

        var singleAnimation = function($flake) {
          $flake.animate({
            top: "500px",
            opacity : "0",
          }, Math.random() + 5000, function(){
            // this particular snow flake has finished, restart again
            $flake.css({
              'top': (- Math.random() * $('#site').height()) + 'px',
              'opacity': 1
            });
            singleAnimation($flake);
          });
        };
        singleAnimation($(this));
      });
    };

    createSnowflakes();
    runSnowStorm();
  }
  fallingSnow();








});
