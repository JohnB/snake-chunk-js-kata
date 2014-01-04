// Now that we have a snake being drawn on the screen, We're going to want to
// be able to draw it many times, for instance every time it moves.
//
// To do this, we'll define a function which draws the snake it's given:

var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

// You'll notice this is similar to how we used the `var` keyword and `=`
// symbol to create the snake earlier. The only difference is instead of
// assigning a list of objects to a variable, we're assigning a chunk of code
// that we want to use later. If we were to to relay this command to Sean, it
// would look something like this:
//
// "Hey Sean, I'm going to teach you how to draw a snake. When someone tells
// you to `drawSnake` and hands you a `snakeToDraw`, you are going to create an
// object called `drawableSnake` with a color of blue and pixels of
// `snakeToDraw`. Create a list of `drawableObjects` and put the drawableSnake
// in it.  Now get the value of draw from  CHUNK and hand it the
// drawableObjects. Thanks!"

// Syntax Breakdown:
//
// `function() { }` says "Hey, between the curly braces is some code we want to
// be able to execute." Functions can be stored inside variables just like
// words and numbers and objects and lists.
//
// `(` and `)` in this case are a way to say that this function expects
// a value to be given to it when it is called. These values are called
// `arguments`, and can be used inside of the function body (the code between
// the curly braces).


// Now all we have to do is call drawSnake with a snake and it will be drawn on
// the screen!

var snake = [{ top: 0, left: 0}];
drawSnake(snake);

// "Hey Sean? Remember `drawSnake`? Well, draw this snake!"
//
// Before you move on, Open up the console and play around with making the
// snake move by calling `drawSnake` with snakes with different `top` and
// `left` values for their segment.
