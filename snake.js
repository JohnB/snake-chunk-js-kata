var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
      return segment;
  }
}

// Unfortunately, it's not a terribly exciting snake if it can't be longer than
// 1 segment. So let's make it so when we move the snake we move all the segments!

var moveSnake = function(snake) {
  var newSnake = [];
  snake.forEach(function(oldSegment) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = oldSegment.direction;
    newSnake.push(newSegment);
  });

  return newSnake;
}

// `array.forEach` tells the computer to go over each element in the array and
// pass it into the function that is passed into forEach.
//
// `array.push` says "add the element you pass to me into the array at the end"

var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    alert("Woops! you hit a wall!");
  }
  drawSnake(snake);
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
// We'll want to update the snake so it starts out as two segments instead of just 1

CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);

// Before you move on:
// 1. Try to use `array.map` to build the new snake in moveSnake:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 2. What advantages come from using `array.map` vs `array.foreach`?
