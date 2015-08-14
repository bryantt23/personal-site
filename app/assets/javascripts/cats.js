$(document).ready(function() {

  // $( "#cat1" ).toggle( "explode" );

  $( "#cat1" ).click(function() {
    $( this ).toggle( "explode" );
  });

  $( "#cat2" ).fadeOut(10000, function() {
    $(this).remove();
  });

  $('#cat3').mouseover(function() {
     $(this).toggleClass('clicked');
  });

  setInterval(function() {
    $( "#cat4" ).effect( "shake", {distance:5});
  },3000);

  // var rotation = function (){
  // $("#cat6").rotate({
  //   angle:0,
  //   animateTo:360,
  //   callback: rotation,
  //   easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
  //       return c*(t/d)+b;
  //   }
  // });
  // }
  // rotation();


    $( "#cat5" ).click(function() {
      $( this ).toggle( "hide" );
    });


  var angle = 1;

  setInterval(function() {
    $("#cat6").rotate(angle);
    angle += 2; //Increases the rotating speed
  }, 100);


});
