$(document).ready(function() {


  //eye see you code********************************************************

  // If you use this code, please link to this pen (cdpn.io/CBwhg). Thanks :)

  // $("#cloud").on("click", function(){
  //
  //   for (i=0;i<100;i++){
  //   $( this).effect( "shake", {times:3, direction:"up"} );
  //     $( this).effect( "shake", {times:3, direction:"right"} );
  //   }
  //
  // });

  // var speed = 700;
  // var times = 5;
  // var loop = setInterval(anim, 800);
  // $("#cloud").on("click", function(){
  //   anim();
  // }
  //
  // function anim(){
  //   times--;
  //   if(times === 0){clearInterval(loop);}
  //   $( this).effect( "shake", {times:3, direction:"up"} );
  //   $( this).effect( "shake", {times:3, direction:"right"} );
  // }


  var times = 5;
  var loop = setInterval(anim, 800);
  $("#cloud").on("click", function(){
    anim();
  });

  function anim(){
    times--;
    if(times === 0){clearInterval(loop);}
    $( "#cloud").effect( "shake", { times:1,direction:"up"} );
    $( "#cloud").effect( "shake", {times:1,direction:"right"} );
  }

});
