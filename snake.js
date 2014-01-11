var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var snake = [{ top: 0, left: 0}];
drawSnake(snake);

// Now that we have a way to repeatedly draw the snake, we want to be able to
// also repeatebly move the snake.
//
// To do this, we're going to write a function which takes a snake changes its
// segments top and left values.

// To make our lives easier, let's make some assumptions:

// 1. The snake is only 1 segment long
// 2. The snake always moves down

// By making these assumptions it keeps the code clear and understandable, as
// well as makes it easy to check our work.

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
  var newSnake = [newSegment];
  return newSnake;
}

// In human-speak: "Hey Sean, I'm teaching you how to move a snake.
// First, Get the first segment and assign it to a variable caled oldSegment.
// Second, create a new segment whose top is one more than the previous
// segments top and whose left is the same as the previous segments left.
// Third, create a new snake which is an array containing just the new segment.
// Fourth, return the new snake to whoever asked you to move the snake."

// Syntax Breakdown:
//
// `return value` - Tells the function to immediately respond with whatever value it
// is given. In this case, the newSnake.
//
// `array[location] -"Get the value at this location in the array." Arrays in
// most programming languages are "zero-indexed" i.e. the first element is at
// 0, the second is at 1, and so
// on.
//
// `+` adds the values on the left and right together. Surprise, eh?

// Now that we have a function to move the snake, we can start calling it and
// then calling the drawSnake function with it's result to move the snake down
// the screen! Copy and paste the following lines into your javascript console
// a few times:

snake = moveSnake(snake);
drawSnake(snake);

// Before moving on:
//
// 1. Can you make the snake move right intead of down?
// 2. What happens to the newSnake variable? Can you use it outside of the
// moveSnake functions curly-braces?
// 3. Why are we re-assigning snake a new value with the results of moveSnake?
