$(document).ready(function() {

  // global variables
  var ctx;
  var gravity = 4;
  var forceFactor = 0.3;
  var mouseDown = false;
  var balls = new Array();
  var mousePos = new Array();

  // event handler
  function onMouseDown(evt){
    mouseDown = true;
    mousePos['downX'] = evt.pageX;
    mousePos['downY'] = evt.pageY;
  }
  function onMouseUp(evt){
    mouseDown = false;
    // mousePos['downX'] = evt.pageX;
    // mousePos['downY'] = evt.pageY;
  }
  function onMouseMove(evt){
    mousePos['currentX'] = evt.posX;
    mousePos['currentY'] = evt.posY;
  }
  function resizeWindow(evt){
    canvas.height=$(window).height();
    canvas.width=$(window).width();
  }


  $(document).mousedown(onMouseDown);
  $(document).mouseup(onMouseUp);
  $(document).mousemove(onMouseMove);
  $(window).bind("resize", resizeWindow);

  // graphics
  function circle(x, y, r, c){
    // draw a circle
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2, true);
    ctx.closePath();
    // fillText
    ctx.fillStyle=c;
    ctx.fill();
    // stroke
    ctx.lineWidth=r*0.1;
    ctx.strokeStyle="#000000";
    ctx.store();
  }
  function random_color(){
    var letter = "0123456789ABCDEF".split("");
    var color = "#";
    for(var i=0;i<6;i++){
      color += letter[Math.round(Math.random)*15];
    }
    return color;
  }

function draw_ball(){
  // apply gravity
  // move the ball
  // check and resolve collisions w/ the balls

  circle(this.x, this.y, this.r, this.c);
}



  // objects
  function ball(positionX, positionY, velocityX, velocityY, radius, bounciness, color){
    this.x=positionX;
    this.y=positionY;
    this.vx=velocityX;
    this.vy=velocityY;
    this.r=radius;
    this.b=bounciness;
    this.c=color;

    this.draw=draw_ball;
  }

  // game loop
  function game_loop(){
    //            x, y
    ctx.clearRect(0,0,canvas.width, canvas.height);

    if(mouseDown==true){
      // draw the arrow

    }
    for(var i=0; i<balls.length;i++){
      // draw ball
    }
    ctx.fillStyle="#000000";
    ctx.font = "15px Arial";
    ctx.fillText("Balls: "+ balls.length, 10, canvas.height -10);
  }

  // let's go
  function init(){
    ctx = $("#canvas")[0].getContext("2d");
    canvas.height = $(window).height();
    canvas.width = $(window).width();
    return setInterval(game_loop, 10);
  }

  init();




});
