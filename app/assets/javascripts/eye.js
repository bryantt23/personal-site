$(document).ready(function() {


  //eye see you code********************************************************

  ;// If you use this code, please link to this pen (cdpn.io/CBwhg). Thanks :)

  $(function(){

    var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy, eyer){

      //append to the monstereyes div, an eyecontainer div plus a pupil div
      $("#monstereyes").append("<div id='" + eyecontainer + "'><div id='" + pupil + "'></div></div>")

      // this makes the divs
      eyecontainer = "#" + eyecontainer;
      pupil = "#" + pupil;

      // .css
      //     To set multiple CSS properties, use the following syntax:
      // css({"propertyname":"value","propertyname":"value",...});
      $(eyecontainer).css({left:eyeposx, top:eyeposy});
      $(pupil).css({width:eyer*0.4,height:eyer*0.4});
      $(eyecontainer).css({width:eyer,height:eyer});
      // i'm thinking the pupil is relative position because it moves, the container absolute because it doesn't?
      $(pupil).css({position: 'relative', background: '#000000', 'border-radius':'50%'});
      $(eyecontainer).css({position:'absolute', background:'#FFFFFF', overflow:'hidden', 'border-radius': '50%'});

      // Initialise core variables
      var r = $(pupil).width()/2;

      // center is half of the container
      var center = {
        x: $(eyecontainer).width()/2 - r,
        y: $(eyecontainer).height()/2 - r
      };

      // can only move half the width
      var distanceThreshold = $(eyecontainer).width()/2 - r;
      var mouseX = center.x, mouseY = center.y;

      // Listen for mouse movement
      //     .mousemove( handler )Returns: jQuery
      // Description: Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
      $(window).mousemove(function(e){
        var d = {

          //         event.pageXReturns: Number
          // Description: The mouse position relative to the left edge of the document.
          x: e.pageX - r - eyeposx - center.x,
          y: e.pageY - r - eyeposy - center.y
        };
        var distance = Math.sqrt(d.x*d.x + d.y*d.y);

        // looks like this makes sure the pupil doesn't cross the threshold
        if (distance < distanceThreshold) {
          mouseX = e.pageX - eyeposx - r;
          mouseY = e.pageY - eyeposy - r;
        } else {
          mouseX = d.x / distance * distanceThreshold + center.x;
          mouseY = d.y / distance * distanceThreshold + center.y;
        }
      });

      // Update pupil location
      var pupil = $(pupil);
      var xp = center.x, yp = center.y;
      var loop = setInterval(function(){
        // change 1 to alter damping/momentum - higher is slower
        xp += (mouseX - xp) / 1;
        yp += (mouseY - yp) / 1;
        pupil.css({left:xp, top:yp});
      }, 1);
    };

    /**
    * Returns a random number between min (inclusive) and max (exclusive)
    */
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }


    var eye = new DrawEye("eyex", "pupilx", getRandomArbitrary(), getRandomArbitrary(), getRandomArbitrary());

    // add 100 sub-object values
    for(i = 0; i < 11; ++i) {

      var eye = new DrawEye("eye"+i.toString(), "pupil"+i.toString(), getRandomArbitrary(0,800), getRandomArbitrary(0,500), getRandomArbitrary(5,50))
    }
  });


});
