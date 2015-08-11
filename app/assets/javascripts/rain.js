$(document).ready(function() {

  $("#cloud").on("click", function(){
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


});
