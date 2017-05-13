window.onload = function() {

  // get the canvas and context and store in vars
  var canvas = document.getElementBy("sky");
  var ctx = canvas.getContext("2d");

  // set canvas dimension to window height and width
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // generate the snowflakes and apply attributes
  var mf = 100;   // max flakes
  var flakes = [];
}
