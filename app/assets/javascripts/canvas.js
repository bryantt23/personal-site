
function initCanvas(){
  var ctx = document.getElementById('my_canvas').getContext('2d');
  var cW = ctx.canvas.width, cH = ctx.canvas.height;
  // Constructor for rectangular assets
  function rectObj(){
    this.x = 0, this.y = 0, this.w = 0;
    this.render = function(ctx, rx, ry, rw, rh, clr){
      ctx.fillStyle = clr;
      ctx.fillRect(rx, ry, rw, rh);
    }
  }
  // Establish Assets outside of the animate function
  // to avoid re-creating them each time the function runs



  var rect1 = new rectObj();
  var rect2 = new rectObj();
  var rect3 = new rectObj();
  var rect4 = new rectObj();

  rect1.w = 50;
  rect2.w = 50;
  // rect2.y = 100;
  rect2.y = 00;
  rect2.h = 50;

  rect3.x = 140;
  rect3.y = 0;
  rect3.h = 50;
  rect3.w = 50;

  function animate(){
    ctx.clearRect(0, 0, cW, cH);
    // Draw here
    rect1.render(ctx, rect1.x, rect1.y, rect1.w, 50, "magenta");
    rect2.render(ctx, cW-rect2.w, rect2.y, 50, rect2.h, "blue");
    rect3.render(ctx, rect3.x, rect3.y, rect3.w, rect3.h, "green");
    rect1.w++;
    rect2.y++;
    rect3.x++;
    rect3.y++;

    rect4.render(ctx, 50,150,100,50, "gold");



    ctx.beginPath();
    ctx.arc(20,cH-20,20, 0, 2 * Math.PI, false);
    //  ctx.arc(20,cH-20,20, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 5;
    //  ctx.strokeStyle = '#003300';
    ctx.stroke();
    // ctx.arc(20,cH-20,20,0,2*Math.PI);
    // ctx.stroke();

    //   ctx.fillStyle("red");
    // ctx.fill();



      // begin custom shape
      ctx.beginPath();
      ctx.moveTo(170, 80);
      ctx.bezierCurveTo(130, 100, 130, 150, 230, 150);
      ctx.bezierCurveTo(250, 180, 320, 180, 340, 150);
      ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
      ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
      ctx.bezierCurveTo(320, 5, 250, 20, 250, 50);
      ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);

      // complete custom shape
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.fillStyle = "rgba(142, 214, 255, .8)";
      ctx.fill();
      ctx.strokeStyle = 'blue';
      ctx.stroke();
  }
  var animateInterval = setInterval(animate, 30);

  ctx.canvas.addEventListener('click', function(event) {
    clearInterval(animateInterval);
    initCanvas();
  });

}





window.addEventListener('load', function(event) {
  initCanvas();
});
