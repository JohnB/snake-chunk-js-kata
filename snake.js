var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

// Now that the snake is moving on it's own, let's make it so it can move in
// different directions!

// First, we'll create a function that moves the segment based upon it's
// direction:

var moveSegment = function(segment) {
  if (segment.direction == "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction == "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction == "right") {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction == "left") {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
}

// The `if` statement allows us to make choices about what code to execute
// based upon values. Here we use a series of `if` and `if else`s to create a
// new segment at its next location. In the event the direction isn't one of
// the 4 we want, we return the original segment.

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  // Once a segment is moved, we give it a direction to move in the next time.
  // Otherwise the snake will just stop moving!
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
}

var snake = [{ top: 0, left: 0, direction: "down" }];
// Add a direction to the starting snakes segments so it knows where to go.

var advanceGame = function() {
  snake = moveSnake(snake);
  drawSnake(snake);
}

CHUNK.executeNTimesPerSecond(advanceGame, 1);

// Before you move on:
// 1. Use a switch statement instead of a series of ifs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FStatements%2Fswitch
// 2. Change the starting snakes segments to ensure all the directions work.
