var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

  textSize(x/2);

  //rect(x, 250, 50, 50);
  text("Nightcore isn't a genre", x, 250);
  x += 5;

  if (x > width) {
    x = 0;
  }
}
