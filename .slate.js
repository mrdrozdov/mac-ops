var pushLeft = slate.operation("push", {
  "direction" : "left",
  "style" : "bar-resize:screenSizeX/2"
});

var pushRight = slate.operation("push", {
  "direction" : "right",
  "style" : "bar-resize:screenSizeX/2"
});

var pushDown = slate.operation("push", {
  "direction" : "down",
  "style" : "bar-resize:screenSizeY/2"
});

var pushUp = slate.operation("push", {
  "direction" : "up",
  "style" : "bar-resize:screenSizeY/2"
});

var fullscreen = slate.operation("push", {
  "direction" : "up",
  "style" : "bar-resize:screenSizeY"
});

slate.bind("left:cmd,alt", pushLeft);
slate.bind("right:cmd,alt", pushRight);
slate.bind("down:cmd,alt", pushDown);
slate.bind("up:cmd,alt", pushUp);
slate.bind("down:cmd,alt,ctrl", fullscreen);
