var draw = function(snakeToDraw, apple) {
  var drawableSnake = { color: "blue", pixels: snakeToDraw };
  var drawableApple = { color: "red", pixels: [apple] };
  var drawableObjects = [drawableSnake, drawableApple];
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

var segmentFurtherForwardThan = function(index, snake) {
  return snake[index - 1] || snake[index];
}

var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}

// Let's make it so the snake grows when we hit the apple!
var growSnake = function(snake) {
  var tipOfTailIndex = snake.length - 1;
  // `array.length` tells us how many elements are in the snake array.
  // arrays are zero indexed, so we subtract one to get the index of the tip.
  var tipOfTail = snake[snake.length - 1];
  snake.push({ top: tipOfTail.top, left: tipOfTail.left });
  // Add a new segment at the tips location, but don't give it a direction so
  // it will stay in place when the snake moves next.
  return snake;
}


// Now each time the game advances we need to check for a collision between the
// apple and snake, and when it finds one grow the snake and move the apple.
var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween([apple], snake)) {
    snake = growSnake(snake);
    apple = CHUNK.randomLocation();
  }
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    alert("Woops! you hit a wall!");
  }
  draw(snake, apple);
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var apple = CHUNK.randomLocation();
var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];

CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);
