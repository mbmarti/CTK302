let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(32);
}

function draw() {
  switch(state) {
    case 0:
    background('purple');
    text("what do you call a\ncow with no legs?", 250, 250);
    break;

    case 1:
    background('orange');
    text("ground beef", 250, 250);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
