// animatesnake.js
// handle the drawing, informed by the class's properties
/*
  drawing the snake
  drawing the food pellet
*/
function Game(size) {
  this.size = size;
  this.score = 0;

  var dx = 1;
  var dy = 0;
  var xPosition = 200;
  var yPosition = 40;
  
  var canvas = document.getElementsByTagName('canvas')[0];
  var ctx = canvas.getContext('2d');
  var s = new Canvasnake(size);

  var animate = function() {
    clear();
    xPosition += dx;
    yPosition += dy;
    ctx.fillStyle = s.color;
    ctx.fillRect(xPosition,yPosition,10,10);
    ctx.fill();
  }

  var deleteme = true;
  var clear = function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (deleteme) {
    console.log('canvas width is ' + canvas.width);
    console.log('canvas height is ' + canvas.height);
    deleteme = false;
    }
  }

  setInterval(animate, 20);  // 100 ms


  
}
