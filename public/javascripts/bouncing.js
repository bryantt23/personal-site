window.onload = function(){

  // global variables
  var ctx;
  var gravity = 0;
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
    balls.push(new ball(mousePos["downX"],
    mousePos["downY"],
    (evt.pageX - mousePos["downX"]) * forceFactor,
    (evt.pageY - mousePos["downY"]) * forceFactor,
    5+(Math.random()*50),
    0.9,
    random_color()));
  }
  function onMouseMove(evt){
    mousePos['currentX'] = evt.pageX;
    mousePos['currentY'] = evt.pageY;
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
    ctx.stroke();
  }
  function random_color(){
    var letter = "0123456789ABCDEF".split("");
    var color = "#";
    for(var i = 0; i < 6; i++){
      color += letter[Math.round(Math.random()*15)];
    }
    return color;
  }

  function arrow(fromx, fromy, tox, toy, c){
    ctx.beginPath();
    var headlen = 10;
    var angle = Math.atan2(toy-fromy, tox-fromx);
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/6), toy-headlen*Math.sin(angle-Math.PI/6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/6), toy-headlen*Math.sin(angle+Math.PI/6));

    //style
    ctx.lineWith = 1;
    ctx.strokeStyle = c;
    ctx.lineCap = "butt";
    ctx.stroke();
  }

  function draw_ball(){
    // apply gravity
    this.vy += gravity * 0.1; // v = a * t
    this.x += this.vx * 0.1; // s = v * t
    this.y += this.vy * 0.1;

    // move the ball
    if(this.x + this.r > canvas.width){
      this.x = canvas.width - this.r;
      this.vx *= -1 * this.b;
    }
    if(this.x - this.r < 0){
      this.x = this.r;
      this.vx *= -1 * this.b;
    }
    if(this.y + this.r > canvas.height){
      this.y = canvas.height - this.r;
      this.vy *= -1 * this.b;
    }
    if(this.y - this.r < 0){
      this.y = this.r;
      this.vy *= -1 * this.b;
    }
    // check and resolve collisions w/ the balls
    circle(this.x,this.y,this.r,this.c);
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
      arrow(mousePos['downX'], mousePos['downY'], mousePos['currentX'], mousePos['currentY'], "red");
    }
    for(var i=0; i<balls.length;i++){
      // draw ball
      balls[i].draw();
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



};
