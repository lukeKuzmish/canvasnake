/*
  let canvasnake.js handle all the logic for the class 
  let animatesnake.js handle the drawing, informed by the class's properties
  let controlsnake.js handle the bindings of keyevents

  QUESTION:  who owns collision detection? who generates randomly the food pellet?
    immediate answer is the controlsnake.js, as it privy to the movement
    
  
*/






function Canvasnake(size) {

/* * * * * * * * * * * * * * * * * * * *
  init variables
 * * * * * * * * * * * * * * * * * * * */

  // private parameters
  this.snakeCircles = [];


/* this doesn't belong here TODO move to a better location
  var version = "0.0.1";
  var creator = "Luke Kuzmish";
*/


  // public properties
  this.color = "#fff";




// do stuff now
  for (var i = 0; i<size; i++) {
    this.snakeCircles.push(new circleObj());
    document.pass_to_log('new circleObj pushed on snakeCircles');
  }



// this is what a public function looks like, just for reference  
  this.function_name = function() {
    console.log('a public method!');
  }


  
  // private objects
  function circleObj() {
    document.pass_to_log('new circleObj created');
  }

  
}

