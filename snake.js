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

// You'll notice that only the head of the snake continues moving down. To fix
// that we'll want to assign a further forward segments direction to the
// newSegment.  This will allow changes in direction to cascade down the snakes
// body.

var segmentFurtherForwardThan = function(index, snake) {
  // You recall from earlier that `index` means "location in list"
  return snake[index - 1] || snake[index];
  // `||` is an operator that returns the value that is truthy. If both are
  // truthy, it returns the one on the left of the `||`
}

var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}

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

CHUNK.executeNTimesPerSecond(advanceGame, 1);
CHUNK.onArrowKey(changeDirection);
