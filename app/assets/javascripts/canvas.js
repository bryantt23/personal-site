
function draw(){
  var ctx = document.getElementById("my_canvas").getContext("2d");
  console.log(ctx.canvas.id+" "+ctx.canvas.width+" "+ctx.canvas.height)

  ctx.fillStyle = "magenta";

  ctx.fillRect(20,20,100,100);
  ctx.fillRect(200,200,50,50);

  ctx.strokeRect(20,20,100,100);
  ctx.strokeRect(200,200,50,50);


}

window.onload = draw;
