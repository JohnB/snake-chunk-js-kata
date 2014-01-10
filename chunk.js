var CHUNK = {
  canvasWidth: 800,
  canvasHeight: 600,
  pixelSize: 40,
  canvas: function() {
    if (CHUNK.context) { return CHUNK.context; }
    var canvas = document.getElementById("chunk-game");
    CHUNK.context = canvas.getContext("2d");
    return CHUNK.context;
  },
  executeNTimesPerSecond: function(tickCallback, gameSpeed) {
    tickCallback();
    CHUNK.processID = setInterval(function() {
      tickCallback();
    }, 1000 / gameSpeed);
  },
  endGame: function() {
    clearInterval(CHUNK.processID);
  },
  draw: function(objects) {
   CHUNK.clear();
   CHUNK.drawObjects(objects);
  },
  clear: function() {
    CHUNK.canvas().clearRect(0, 0, CHUNK.canvasWidth, CHUNK.canvasHeight);
  },
  drawObjects: function(objects) {
    var ui = this;
    objects.forEach(function(object) {
      object.pixels.forEach(function(pixel) {
        ui.drawPixel(object.color, pixel);
      });
    });
  },
  drawPixel: function(color, pixel) {
    CHUNK.canvas().fillStyle = color;
    var translatedPixel = CHUNK.translatePixel(pixel);
    CHUNK.context.fillRect(translatedPixel.left, translatedPixel.top, CHUNK.pixelSize, CHUNK.pixelSize);
  },
  translatePixel: function(pixel) {
    return { left: pixel.left * CHUNK.pixelSize,
             top: pixel.top * CHUNK.pixelSize }
  }
}
