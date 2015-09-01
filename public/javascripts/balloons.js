$(document).ready(function() {

// rAF
window.requestAnimationFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (f) {
        window.setTimeout(f, 1e3 / 60);
    };
}();


$( "#test" ).click(function() {
    makeBalloons(1);
});


var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var W = canvas.width;
var H = canvas.height;
// the dimensions of the images being used
var imageX = 40;
var imageY = 60;

// the amount to generate
var numOfBalloons = 5;

  var balloons = [];
// image url's for randomly picking different colours
var balImages = ['http://www.maplecityrubber.com/wp-content/themes/maple_city/images/balloon_blue.png', 'http://www.maplecityrubber.com/wp-content/themes/maple_city/images/balloon_red.png',
                'http://www.maplecityrubber.com/wp-content/themes/maple_city/images/balloon_green.png', 'http://www.maplecityrubber.com/wp-content/themes/maple_city/images/balloon_gold.png'];


  makeBalloons(numOfBalloons);

  function makeBalloons(numOfBalloons) {

    for (var i = 0; i < numOfBalloons; ++i) {
      var id = "balloon" + i;
      // keep start point within the horizontal bounds: 0 and canvas.width - image width to stop spawning half out for example
      var x = Math.floor(Math.random() * (W - imageX));
      // keep start point within the vertical bounds: 0 and canvas.height - image height to stop spawning half out for example
      var y = Math.floor(Math.random() * (H - imageY));
      // generate random delta x and y values so there's an element of randomness in the speed of each object
      var dx = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      var dy = Math.floor(Math.random() * 2) == 1 ? 1 : -1;

      // generate random number and use it as an index for the url array to set the source
      var imgSrc = Math.floor(Math.random() * balImages.length);
      var src = balImages[imgSrc];

      balloons.push({
        id: id,
        src: src,
        x: x,
        y: y,
        dx: dx,
        dy: dy
      });
    }

  };



  (function renderGame() {



    // game over condition
    if (balloons.length > 0) {
      window.requestAnimationFrame(renderGame);

      // clear canvas else images won't be wiped from previous frame
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = '#333';
      ctx.fillRect(0, 0, W, H);

      // loop through balloons, redrawing and updating values
      for (var balloon in balloons) {
        var bal = balloons[balloon];
        var x = bal.x;
        var y = bal.y;
        var dx = bal.dx;
        var dy = bal.dy;
        var src = bal.src;
        if (x < 0 || x > (W - imageX)) dx = -dx;
        if (y < 0 || y > (H - imageY)) dy = -dy;
        x += dx;
        y += dy;

        var img = new Image();
        img.src = bal.src;

        ctx.drawImage(img, x, y, imageX, imageY);

        bal.x = x;
        bal.y = y;
        bal.dx = dx;
        bal.dy = dy;
      }

      // mouse and touch event handlers, remove balloon from array to "destroy"
      ctx.canvas.addEventListener('mouseup', function(event) {
        var mX = event.clientX - ctx.canvas.offsetLeft;
        var mY = event.clientY - ctx.canvas.offsetTop;
        for (var i = 0; i < balloons.length; i++) {
          var b = balloons[i];
          if (mX >= b.x && mX < b.x + imageX && mY >= b.y && mY < b.y + imageY) {
            balloons.splice(i, 1);
          }
        }
      });
    } else {
      // console.log("done");
      alert("All balloons are popped!")
      return;
    }
  }());



  });
