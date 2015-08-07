// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require owl.carousel
//= require bootstrap-sprockets
//= require jQueryRotate
//= require turbolinks

// <script>
$(document).ready(function() {

  $("#jumb2").owlCarousel({

    items : 13, //10 items above 1000px browser width

    autoPlay: 8000,
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 300,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });


  setTimeout(function(){
    $('#notice_wrapper').fadeOut("slow", function(){
      $(this).remove();
    })
  }, 4500);







  // lite brite code


  // Produce initial 16 x 16 grid
  for(var i=1; i <= 16; i++) {
    for(var j=1; j <= 16; j++) {

      $('<div>').attr({
        "id": "divGrid " + i + "-" + j,
        "class": "divGrid",
      }).appendTo("#gridWrapper");

    }
    $("#gridWrapper").append("<br>")
  }

  // Grid size adjustment button event handler
  $("#adjustGridSize").click(function() {
    var rows = prompt("How many rows?");
    var columns = prompt("How many columns?");
    $(".divGrid").remove();
    $("#gridWrapper > br").remove();
    $("#gridWrapper").height(rows * 12);
    $("#gridWrapper").width(columns * 12);

    // Produces the new grid
    for(var i=1; i <= rows; i++) {
      for(var j=1; j <= columns; j++) {

        $('<div>').attr({
          "id": "divGrid " + i + "-" + j,
          "class": "divGrid",
        }).appendTo("#gridWrapper");
      }
      $("#gridWrapper").append("<br>");
    }

    // Need to reset the drawing method since we've dynamically created new HTML elements
    setSingleDraw();
  });

  // Clear button event handler
  $("#clear").click(function() {
    // $(".divGrid").css({"background-color" : "#FFF", "border-color" : "#FFF"});
    $(".divGrid").css({"background-color" : "#000", "border-color" : "#FFF"});
  });

  // Random colors button event handler
  $("#randomColors").click(function() {
    setRandomDraw();
  });

  // Color menu event handler
  $(".colorGrid").click(function() {
    color = $(this).css("background-color");
    setColorDraw();
  });

  function setSingleDraw() {

    // Establishes the initial black-only coloring method
    // $(".divGrid").on("mouseenter", function() {
    $(".divGrid").click(function() {
      // $(this).css({"background-color" : "#000", "border-color" : "#000"});
      $(this).css({"background-color" : "#F00", "border-color" : "#000"});
    });
  }

  // We set to color black-only by default
  setSingleDraw();

  function randomColorGen() {

    var randomColor = "#"
    var colorString = "0123456789ABCDEF";
    for(i = 1; i <= 6; i++) {
      var randomGen = Math.floor(Math.random() * 16);
      randomColor += colorString.substring(randomGen, randomGen + 1);
    }
    return randomColor;
  }

  function setRandomDraw() {
    $(".divGrid").click(function() {
      // $(".divGrid").off("mouseenter");
      // $(".divGrid").on("mouseenter", function() {
      var color = randomColorGen();
      $(this).css({"background-color" : color, "border-color" : color});
    });
  }

  function setColorDraw() {
    $(".divGrid").click(function() {
      // $(".divGrid").off("mouseenter");
      // $(".divGrid").on("mouseenter", function() {
      $(this).css({"background-color" : color, "border-color" : color});
    });
  }




  // stress test code
  function displayVals() {
    calcUsage();
  }

  // variable for  checkboxes
  var $cbs = $('input[name="ch1"]');

  function calcUsage() {
    var total = 0;

    // for each checkbox
    $cbs.each(function() {

      // if this checkbox is checked
      if (this.checked)

      // parse the value and add it to the total
      total = parseInt(total) + parseInt(this.value);
    });

    //display message to user based on total
    //display in the div named usertotal
    if(total>299){
      $("#usertotal").text(total + ". At risk of illness.");
    }
    else if (total>149){
      $("#usertotal").text(total +". Risk of illness is moderate.");
    }
    else{
      $("#usertotal").text(total +". Only have a slight risk of illness.");
    }
  }

  $("select").change(displayVals);
  displayVals();

  $cbs.click(calcUsage);


  //code to change background color with button

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



  //eye see you code

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


  // for spinning wheel
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
