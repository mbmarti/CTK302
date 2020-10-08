let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
}

function draw() {
  switch (state) {
    case 0:
    background('red');
    text("state 0", 250, 250);
    break;

    case 1:
    background('green');
    text("state 1", 250, 250);
    break;

    case 2:
    background('blue');
    text("state 2", 250, 250);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 2) {
    state = 0;
  }
}
