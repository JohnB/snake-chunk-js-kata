var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var snake = [{ top: 0, left: 0}];
drawSnake(snake);

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
  var newSnake = [newSegment];
  return newSnake;
}

// Hooray! We can both draw and move the snake! Of course, having our users
// copy and paste lines of code into their javascript console isn't a wonderful
// idea, so we're going to have CHUNK execute the move and draw commands for us .

var advanceGame = function() {
  snake = moveSnake(snake);
  drawSnake(snake);
}

CHUNK.executeNTimesPerSecond(advanceGame, 1);

// Bam! Now the snake moves down until it runs off the game screen.
//
// Because functions are just another kind of value (like numbers, arrays,
// objects, strings, etc.) we can pass them as arguments to other functions.
//
// "Hey Sean, create a function that moves the game forward. Next tell chunk to
// execute that function once per-second.

// Before you move on:
//
// 1. How can you increase the speed at which the snake moves?
