
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
    rect1.w = 50;
    rect2.w = 50;
    // rect2.y = 100;
    rect2.y = 00;
    rect2.h = 50;
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        // Draw here
        rect1.render(ctx, rect1.x, rect1.y, rect1.w, 50, "magenta");
        rect2.render(ctx, cW-rect2.w, rect2.y, 50, rect2.h, "blue");
        rect1.x++;
        rect2.y++;
    }
    var animateInterval = setInterval(animate, 30);

    ctx.canvas.addEventListener('click', function(event) {
        clearInterval(animateInterval);
        console.log(animateInterval);
    });

}
window.addEventListener('load', function(event) {
    initCanvas();
});
