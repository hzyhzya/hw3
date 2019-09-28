var x = 230;
var y = 220;
var h = x-100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,100);
  noStroke();

  // draw pipe
  fill(255,255,255);
  noStroke();
  rect(0, 200, x, 20);
  rect(250, 0, 20, x-100);

  // draw drip
  fill(176,244,230)
  ellipse(x, y, 10);
  ellipse(260, h, 10);

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3
  h = h + 8

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
  if (h > height*1.5){
    h = x-100}
}
