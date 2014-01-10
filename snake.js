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

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
}

// Of course, in order to be a game we need to actually be able to lose, so
// let's make it so when the snake hits the boundaries the game is over.

var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    // CHUNK.detectCollision compares the pixels inside of an object to see if any of them overlap
    CHUNK.endGame();
    alert("Woops! you hit a wall!");
    // `alert` displays a popup to the user with the passed in text.
  }
  drawSnake(snake);
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var snake = [{ top: 0, left: 0, direction: "down" }];

CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);
